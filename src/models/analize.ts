import { DetectedObject, XCoord, YCoord } from "./detectedObject";

const API_ENDPOINT = import.meta.env.VITE_API_URL;

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
  return fetch(`${API_ENDPOINT}/banana-scale`, {
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
