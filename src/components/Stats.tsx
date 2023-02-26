import { AnalizeResult } from "../models/analize";
import Progress from "./Progress";
import "../styles/Stats.css"

export default function Stats({ banana, objects }: AnalizeResult) {
  if (objects.length === 0) {
    return <h3 className="stats stats-error">Unfortunately, no objects were found :(</h3>;
  }

  if (banana == null) {
    return <h3 className="stats stats-error">Reference banana not found :(</h3>
  }
  
  const biggestArea = objects[0].banana_scale![0] * objects[0].banana_scale![1];
  const objectsLabels = objects.map((o) => (
    <h3 key={o.label}>{o.label}</h3>
  ));
  const objectsRanking = objects.map((o) => (
    <Progress key={o.label} obj={o} max={biggestArea} />
  ));

  return (
    <div className="stats">
      <h2>Object Comparison in Banana Units</h2>
      <div className="stats-container">
        <div className="stats-labels secondary-font">
          {objectsLabels}
        </div>
        <div className="stats-areas">
          {objectsRanking}
        </div>
      </div>
    </div>
  );
}
