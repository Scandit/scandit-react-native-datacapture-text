"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defaults = void 0;
var react_native_1 = require("react-native");
var Camera_Related_1 = require("scandit-react-native-datacapture-core/js/Camera+Related");
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
// tslint:disable-next-line:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureText;
// tslint:disable-next-line:variable-name
exports.Defaults = {
    TextCapture: {
        TextCaptureOverlay: {
            Brush: {
                fillColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.TextCapture.TextCaptureOverlay.Brush.fillColor),
                strokeColor: Common_1.Color
                    .fromJSON(NativeModule.Defaults.TextCapture.TextCaptureOverlay.Brush.strokeColor),
                strokeWidth: NativeModule.Defaults.TextCapture.TextCaptureOverlay.Brush.strokeWidth,
            },
        },
        TextCaptureSettings: {
            recognitionDirection: NativeModule.Defaults.TextCapture.TextCaptureSettings.recognitionDirection,
            duplicateFilter: NativeModule.Defaults.TextCapture.TextCaptureSettings.duplicateFilter,
        },
        RecommendedCameraSettings: Camera_Related_1.CameraSettings
            .fromJSON(NativeModule.Defaults.TextCapture.RecommendedCameraSettings),
    },
};
//# sourceMappingURL=Defaults.js.map