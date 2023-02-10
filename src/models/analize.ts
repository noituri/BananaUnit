import { DetectedObject } from "./detectedObject";

export interface AnalizeResult {
    banana?: DetectedObject,
    objects: [DetectedObject]
}