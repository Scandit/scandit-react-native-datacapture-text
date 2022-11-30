/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import Foundation
import ScanditDataCaptureCore

@objc(ScanditDataCaptureText)
class ScanditDataCaptureText: RCTEventEmitter {
    override init() {
        super.init()
        registerDeserializer()
    }

    var hasListeners = false
    internal let didCaptureTextLock =
        CallbackLock<Bool>(name: ScanditDataCaptureTextEvent.didCaptureText.rawValue)

    @objc override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc override var methodQueue: DispatchQueue! {
        return SDCSharedMethodQeueue
    }

    @objc override func invalidate() {
        super.invalidate()
        unlockLocks()
    }

    internal func unlockLocks() {
        didCaptureTextLock.reset()
    }

    // Empty methods to unify the logic on the TS side for supporting functionality automatically provided by RN on iOS,
    // but custom implemented on Android.

    @objc func registerListenerForEvents() { }
    @objc func unregisterListenerForEvents() { }
}
