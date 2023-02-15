import { AnalizeResult } from "./analize";

export const EXAMPLES: {[key: string]: AnalizeResult} = {
    "example-1.png": {
        "banana": {
            "label": "banana",
            "coord": [
                45.22,
                260.23
            ],
            "width": 410.4,
            "height": 234.19,
            "confidence": 1.0,
            "banana_scale": [
                1,
                1
            ]
        },
        "objects": [
            {
                "label": "dog",
                "coord": [
                    12.05,
                    50.58
                ],
                "width": 455.71999999999997,
                "height": 210.66000000000003,
                "confidence": 0.994,
                "banana_scale": [
                    1.11,
                    0.89
                ]
            },
        ],
        "imageSize": [515, 511]
    }
};