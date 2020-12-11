/*
* This file is part of the Scandit Data Capture SDK
*
* Copyright (C) 2020- Scandit AG. All rights reserved.
*/

import Foundation

enum ScanditDataCaptureTextEvent: String, CaseIterable {
    case didCaptureText = "textCaptureListener-didCaptureText"
}

extension ScanditDataCaptureText {
    override func supportedEvents() -> [String]! {
        return ScanditDataCaptureTextEvent.allCases.map({$0.rawValue})
    }

    override func startObserving() {
        hasListeners = true
    }

    override func stopObserving() {
        hasListeners = false
        unlockLocks()
    }

    func sendEvent(withName name: ScanditDataCaptureTextEvent, body: Any!) -> Bool {
        guard hasListeners else { return false }
        sendEvent(withName: name.rawValue, body: body)
        return true
    }
}
