import { toast } from "react-toastify";
import { DetectedObject, XCoord, YCoord } from "./detectedObject";

type AnalizeResult =
  | { isOk: true; data: AnalizeData }
  | { isOk: false; data: AnalizeError };

export interface AnalizeData {
  banana?: DetectedObject;
  objects: Array<DetectedObject>;
  imageSize: [XCoord, YCoord];
}

interface AnalizeError {
  error: string;
}

export function fetchResult(file: File): Promise<AnalizeResult> {
  return fetch("http://localhost:5000/banana-scale", {
    method: "POST",
    body: file,
    headers: {
      "content-type": file.type,
      "content-length": file.size.toString(),
    },
  })
    .then((resp) =>
      resp.json().then((data) => {
        return {
          isOk: resp.status === 200,
          data: data,
        };
      })
    )
    .catch((_) => {
      return {
        isOk: false,
        data: {
          error: "Unknown error occurred",
        },
      };
    });
}
