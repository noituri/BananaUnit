class DetectedObject:
    def __init__(self, label, box, confidence):
        self.label = label
        self.coord = [box[0], box[1]]
        self.width = box[2] - box[0]
        self.height = box[3] - box[1]
        self.confidence = confidence
        self.banana_scale = None

    def __str__(self):
        base = f"{self.label} {self.confidence*100}% at {self.coord} {self.width}x{self.height}"
        if self.label != "banana":
            base += f". {self.banana_scale} in banana scale"
        return base

    def area(self):
        return self.width() * self.height()
