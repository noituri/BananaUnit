import { DetectedObject, XCoord, YCoord } from "./detectedObject";

export interface AnalizeResult {
  banana?: DetectedObject;
  objects: Array<DetectedObject>;
  imageSize: [XCoord, YCoord];
}

export function fetchResult(file: File): Promise<AnalizeResult> {
  // TODO: Use env
  return fetch("http://localhost:8080/banana-scale", {
    method: "POST",
    body: file,
    // headers: {
    //   "content-type": file.type,
    //   "content-length": file.size.toString(),
    // },
  }).then((resp) => resp.json());
}
