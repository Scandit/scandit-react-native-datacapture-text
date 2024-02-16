/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

import React
import Foundation
import ScanditFrameworksText
import ScanditDataCaptureCore

@objc(ScanditDataCaptureText)
class ScanditDataCaptureText: RCTEventEmitter {
    var textModule: TextCaptureModule!

    override init() {
        super.init()
        textModule = TextCaptureModule(
            textCaptureListener: FrameworksTextCaptureListener(
                emitter: ReactNativeEmitter(emitter: self)
            )
        )
        textModule.didStart()
    }

    @objc override func supportedEvents() -> [String]! {
        FrameworksTextCaptureEvent.allCases.map { $0.rawValue }
    }

    override func constantsToExport() -> [AnyHashable: Any]! {
        [
            "Defaults": [
                "TextCapture": textModule.defaults.toEncodable()
            ]
        ]
    }

    @objc override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc override var methodQueue: DispatchQueue! {
        return sdcSharedMethodQueue
    }

    @objc override func invalidate() {
        super.invalidate()
        textModule.didStop()
    }

    deinit {
        invalidate()
    }

    @objc(finishDidCaptureTextCallback:)
    func finishDidCaptureTextCallback(enabled: Bool) {
        textModule.finishDidCaptureText(enabled: enabled)
    }

    @objc func registerListenerForEvents() {
        textModule.addListener()
    }

    @objc func unregisterListenerForEvents() {
        textModule.removeListener()
    }

    @objc(setModeEnabledState:)
    func setModeEnabledState(enabled: Bool) {
        textModule.setModeEnabled(enabled: enabled)
    }

    @objc(updateTextCaptureOverlay:resolver:rejecter:)
    func updateTextCaptureOverlay(overlayJson: String,
                      resolve: @escaping RCTPromiseResolveBlock,
                      reject: @escaping RCTPromiseRejectBlock) {
        textModule.updateOverlay(overlayJson: overlayJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(updateTextCaptureMode:resolver:rejecter:)
    func updateTextCaptureMode(modeJson: String,
                      resolve: @escaping RCTPromiseResolveBlock,
                      reject: @escaping RCTPromiseRejectBlock) {
        textModule.updateModeFromJson(modeJson: modeJson, result: ReactNativeResult(resolve, reject))
    }

    @objc(applyTextCaptureModeSettings:resolver:rejecter:)
    func applyTextCaptureModeSettings(modeSettingsJson: String,
                      resolve: @escaping RCTPromiseResolveBlock,
                      reject: @escaping RCTPromiseRejectBlock) {
        textModule.applyModeSettings(modeSettingsJson: modeSettingsJson, result: ReactNativeResult(resolve, reject))
    }
}
