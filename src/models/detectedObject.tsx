export type XCoord = number;
export type YCoord = number;

export interface DetectedObject {
  label: string;
  coord: [XCoord, YCoord];
  width: number,
  height: number,
  confidence: number;
  banana_scale: [XCoord, YCoord];
}
