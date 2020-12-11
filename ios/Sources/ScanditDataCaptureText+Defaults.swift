/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import ScanditTextCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureText {
    override func constantsToExport() -> [AnyHashable: Any]! {
        return ["Defaults": defaults]
    }

    var defaults: [String: Any] {
        return ["TextCapture": textCaptureDefaults]
    }

    var textCaptureDefaults: [String: Any] {
        return ["RecommendedCameraSettings": recommendedCameraSettings,
                "TextCaptureOverlay": textCaptureOverlayDefaults,
                "TextCaptureSettings": textCaptureSettings]
    }

    var textCaptureSettings: [AnyHashable: Any] {
        guard let textCaptureSettings = try? TextCaptureSettings(jsonString: "{}") else { return [:] }
        return ["duplicatedfilter": Int(textCaptureSettings.duplicateFilter * 1000),
                "recognitionDirection": textCaptureSettings.recognitionDirection.jsonString]
    }

    var recommendedCameraSettings: [AnyHashable: Any] {
        return TextCapture.recommendedCameraSettings.rntsdc_dictionary
    }

    var textCaptureOverlayDefaults: [String: Any] {
        return ["Brush": TextCaptureOverlay.defaultBrush.rntsdc_dictionary]
    }
}
