import { DetectedObject } from "../models/detectedObject";

export interface BoxProps {
  obj: DetectedObject;
  xScale: number;
  yScale: number;
}

export default function Box({ obj, xScale, yScale }: BoxProps) {
  const x = obj.coord[0] * xScale;
  const y = obj.coord[1] * yScale;
  const width = obj.width * xScale;
  const height = obj.height * yScale;

  // TODO: Show label, colors, onHover
  return <rect x={x} y={y} width={width} height={height}></rect>;
}
