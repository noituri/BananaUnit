import { AnalizeResult } from "../models/analize";
import Progress from "./Progress";

export default function Stats({ banana, objects }: AnalizeResult) {
  const objectsRanking = objects.map(o => <Progress {...o}/>)
  return <>{objectsRanking}</>;
}
