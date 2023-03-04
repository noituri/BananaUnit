from io import BytesIO

from detected_object import DetectedObject
from flask import Flask, request
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from PIL import Image
from transformers import DetrFeatureExtractor, DetrForObjectDetection
import torch

MAX_CONTENT_LENGTH = 10000

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
limiter = Limiter(get_remote_address, app=app)


def new_error(msg, status):
    print(f"ERROR({status}): {msg}")
    return {
        "error": msg
    }, status


@app.post('/banana-scale')
@limiter.limit("1/minute")
def banana_scale():
    print("BANANA-SCALE-REQUEST")

    if MAX_CONTENT_LENGTH > request.content_length:
        return new_error("Image too large", 413)

    image = Image.open(BytesIO(request.get_data())).convert('RGB')

    extractor = DetrFeatureExtractor.from_pretrained('facebook/detr-resnet-101-dc5')
    model = DetrForObjectDetection.from_pretrained('facebook/detr-resnet-101-dc5')

    inputs = extractor(images=image, return_tensors="pt")
    outputs = model(**inputs)
    # TODO: Use CUDA
    target_sizes = torch.tensor([image.size[::-1]])
    results = extractor.post_process_object_detection(outputs, threshold=0.9, target_sizes=target_sizes)[0]

    banana = None
    objects = []
    for score, label, box in zip(results["scores"], results["labels"], results["boxes"]):
        box = [round(i, 2) for i in box.tolist()]
        object_label = model.config.id2label[label.item()]
        confidence = round(score.item(), 3)
        obj = DetectedObject(object_label, box, confidence)
        if obj.label == 'banana' and (banana is None or banana.confidence < confidence):
            obj.banana_scale = (1.0, 1.0)
            banana = obj
        else:
            objects.append(obj)

    if banana is not None:
        for o in objects:
            o.banana_scale = (o.width / banana.width, o.height / banana.height)
        objects.sort(key=lambda o: o.banana_scale[0] * o.banana_scale[1], reverse=True)

    print("Banana: ", banana)
    print("Objects:\n", [str(o) for o in objects])

    return {
        "banana": None if banana is None else banana.__dict__,
        "objects": [o.__dict__ for o in objects],
        "imageSize": image.size
    }


@app.errorhandler(429)
def ratelimit_error_handler(_arg):
    return new_error("Too many requests", 429)
