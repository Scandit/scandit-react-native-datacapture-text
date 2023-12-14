/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditTextCapture
import ScanditDataCaptureCore

extension ScanditDataCaptureText {
    func registerDeserializer() {
        let deserializer = TextCaptureDeserializer()
        deserializer.delegate = self
        ScanditDataCaptureCore.register(modeDeserializer: deserializer)
    }
}

extension ScanditDataCaptureText: TextCaptureDeserializerDelegate {
    func textCaptureDeserializer(_ deserializer: TextCaptureDeserializer,
                                 didStartDeserializingMode mode: TextCapture,
                                 from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func textCaptureDeserializer(_ deserializer: TextCaptureDeserializer,
                                 didFinishDeserializingMode mode: TextCapture,
                                 from jsonValue: JSONValue) {
        if jsonValue.containsKey("enabled") {
            mode.isEnabled = jsonValue.bool(forKey: "enabled")
        }
        mode.addListener(self)
    }

    func textCaptureDeserializer(_ deserializer: TextCaptureDeserializer,
                                 didStartDeserializingSettings settings: TextCaptureSettings,
                                 from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func textCaptureDeserializer(_ deserializer: TextCaptureDeserializer,
                                 didFinishDeserializingSettings settings: TextCaptureSettings,
                                 from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func textCaptureDeserializer(_ deserializer: TextCaptureDeserializer,
                                 didStartDeserializingOverlay overlay: TextCaptureOverlay,
                                 from jsonValue: JSONValue) {
        // Empty on purpose
    }

    func textCaptureDeserializer(_ deserializer: TextCaptureDeserializer,
                                 didFinishDeserializingOverlay overlay: TextCaptureOverlay,
                                 from jsonValue: JSONValue) {
        // Empty on purpose
    }
}
