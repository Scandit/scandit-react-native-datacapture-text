import { CameraSettings } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { Color } from 'scandit-react-native-datacapture-core/js/Common';
import { Direction } from 'scandit-react-native-datacapture-core/js/CommonEnums';
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
