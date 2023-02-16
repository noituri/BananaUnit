import { AnalizeResult } from "../models/analize";
import Progress from "./Progress";
import "../styles/Stats.css"

export default function Stats({ banana, objects }: AnalizeResult) {
  // TODO: handle objects.length == 0
  const biggestArea = objects[0].banana_scale[0] * objects[0].banana_scale[1];
  const objectsLabels = objects.map((o) => (
    <h3 key={o.label}>{o.label}</h3>
  ));
  const objectsRanking = objects.map((o) => (
    <Progress key={o.label} obj={o} max={biggestArea} />
  ));
  return (
    <div className="stats">
      <h2>How many banans can we fit?</h2>
      <div className="stats-container">
        <div className="stats-labels">
          {objectsLabels}
        </div>
        <div className="stats-areas">
          {objectsRanking}
        </div>
      </div>
    </div>
  );
}
