import { AnalizeResult } from "./analize";

export const EXAMPLES: { [key: string]: AnalizeResult } = {
  "example-1.png": {
    banana: {
      label: "banana",
      coord: [45.22, 260.23],
      width: 410.4,
      height: 234.19,
      confidence: 1.0,
      banana_scale: [1, 1],
    },
    objects: [
      {
        label: "dog",
        coord: [12.05, 50.58],
        width: 455.71999999999997,
        height: 210.66000000000003,
        confidence: 0.994,
        banana_scale: [1.11, 0.89],
      },
    ],
    imageSize: [515, 511],
  },
  "example-2.jpg": {
    banana: {
      label: "banana",
      coord: [95.24, 346.0],
      width: 320.67,
      height: 192.87,
      confidence: 1.0,
      banana_scale: [1, 1],
    },
    objects: [
      {
        label: "cat",
        coord: [71.7, 0.49],
        width: 302.34000000000003,
        height: 439.7,
        confidence: 0.999,
        banana_scale: [0.942838432032931, 2.279773940996526],
      },
      {
        label: "orange",
        coord: [413.62, 342.66],
        width: 221.24,
        height: 224.95,
        confidence: 0.996,
        banana_scale: [0.6899304581033461, 1.1663296520972675],
      },
    ],
    imageSize: [640, 831],
  },
};
