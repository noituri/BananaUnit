type XCoord = number;
type YCoord = number;

export interface DetectedObject {
  label: string;
  box: [XCoord, YCoord, XCoord, YCoord];
  confidence: number;
  banana_scale: [XCoord, YCoord];
}
