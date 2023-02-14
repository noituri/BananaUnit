import { DetectedObject, XCoord, YCoord } from "./detectedObject";

export interface AnalizeResult {
    banana?: DetectedObject,
    objects: Array<DetectedObject>
    imageSize: [XCoord, YCoord]
}