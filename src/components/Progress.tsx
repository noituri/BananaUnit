import { DetectedObject } from "../models/detectedObject";
import "../styles/Progress.css";

export interface ProgressProps {
  obj: DetectedObject;
  max: number;
}

export default function Progress({ obj, max }: ProgressProps) {
  const area = parseFloat(
    (obj.banana_scale[0] * obj.banana_scale[1]).toFixed(2)
  );

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-inner"
        style={{ width: (area / max) * 100 + "%" }}
      ></div>
      <p className="area">
        Area: {area} 🍌<sup>2</sup>
      </p>
    </div>
  );
}
