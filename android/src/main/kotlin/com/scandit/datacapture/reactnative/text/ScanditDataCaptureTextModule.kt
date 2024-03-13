/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.text

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.scandit.datacapture.frameworks.text.TextCaptureModule
import com.scandit.datacapture.reactnative.core.utils.ReactNativeResult

class ScanditDataCaptureTextModule(
    reactContext: ReactApplicationContext,
    private val textCaptureModule: TextCaptureModule,
) : ReactContextBaseJavaModule(reactContext) {

    override fun invalidate() {
        textCaptureModule.onDestroy()
        super.invalidate()
    }

    override fun getName(): String = "ScanditDataCaptureText"

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        "Defaults" to mapOf(
            "TextCapture" to textCaptureModule.getDefaults()
        )
    )

    @ReactMethod
    fun registerListenerForEvents(promise: Promise) {
        textCaptureModule.addListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun unregisterListenerForEvents(promise: Promise) {
        textCaptureModule.removeListener(ReactNativeResult(promise))
    }

    @ReactMethod
    fun finishDidCaptureTextCallback(enabled: Boolean, promise: Promise) {
        textCaptureModule.finishDidCapture(enabled, ReactNativeResult(promise))
    }

    @ReactMethod
    fun setModeEnabledState(enabled: Boolean, promise: Promise) {
        textCaptureModule.setModeEnabled(enabled, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateTextCaptureOverlay(overlayJson: String, promise: Promise) {
        textCaptureModule.updateOverlay(overlayJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun updateTextCaptureMode(modeJson: String, promise: Promise) {
        textCaptureModule.updateModeFromJson(modeJson, ReactNativeResult(promise))
    }

    @ReactMethod
    fun applyTextCaptureModeSettings(modeSettingsJson: String, promise: Promise) {
        textCaptureModule.applyModeSettings(modeSettingsJson, ReactNativeResult(promise))
    }
}
