import { DetectedObject } from "../models/detectedObject";
import "../styles/Progress.css";

export default function Progress({ label }: DetectedObject) {
  return (
    <div className="progress-container">
      {label}
      <div className="progress-bar">
        <div className="progress-bar-inner"></div>
      </div>
    </div>
  );
}
