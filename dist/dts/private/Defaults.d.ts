import { CameraSettings } from 'scandit-react-native-datacapture-core';
import { Color } from 'scandit-react-native-datacapture-core';
import { Direction } from 'scandit-react-native-datacapture-core';
export declare const Defaults: {
    TextCapture: {
        TextCaptureOverlay: {
            Brush: {
                fillColor: Color;
                strokeColor: Color;
                strokeWidth: any;
            };
        };
        TextCaptureSettings: {
            recognitionDirection: Direction;
            duplicateFilter: any;
        };
        RecommendedCameraSettings: CameraSettings;
    };
};
