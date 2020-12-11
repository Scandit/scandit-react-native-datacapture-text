/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation
import ScanditTextCapture

extension ScanditDataCaptureText: TextCaptureListener {
    func textCapture(_ textCapture: TextCapture,
                     didCaptureIn session: TextCaptureSession,
                     frameData: FrameData) {
        let body = ["session": session.jsonString]
        guard let value = didCaptureTextLock.wait(afterDoing: {
            return sendEvent(withName: .didCaptureText, body: body)
        }) else { return }
        textCapture.isEnabled = value
    }

    @objc(finishDidCaptureTextCallback:)
    func finishDidCaptureTextCallback(enabled: Bool) {
        didCaptureTextLock.unlock(value: enabled)
    }
}
