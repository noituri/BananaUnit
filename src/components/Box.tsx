import { DetectedObject } from "../models/detectedObject";

export interface BoxProps {
  obj: DetectedObject;
  xScale: number;
  yScale: number;
  isRef: boolean;
}

export default function Box({ obj, xScale, yScale, isRef }: BoxProps) {
  const labelSize = 24;

  const x = obj.coord[0] * xScale;
  const y = obj.coord[1] * yScale;
  const width = obj.width * xScale;
  const height = obj.height * yScale;
  // If used as a reference, use a different color
  const rgb = isRef ? [255, 248, 154] : [253, 138, 138];
  const scale = obj.banana_scale?.map((s) => s.toFixed(2));

  return (
    <g className="box" fontSize={labelSize}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.6)`}
        stroke={`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1.0)`}
        strokeWidth={3}
      ></rect>

      <text x={x + width / 2} y={y + height / 2} textAnchor="middle">
        {isRef && "reference"} {obj.label}
      </text>
      <text
        x={x + width / 2}
        y={y + height / 2 + labelSize}
        textAnchor="middle"
      >
        {scale ? `${scale[0]} x ${scale[1]}🍌` : "No reference banana"}
      </text>
    </g>
  );
}
