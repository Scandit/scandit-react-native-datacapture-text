/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.text

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.scandit.datacapture.frameworks.text.TextCaptureModule
import com.scandit.datacapture.frameworks.text.listeners.FrameworksTextCaptureListener
import com.scandit.datacapture.reactnative.core.utils.ReactNativeEventEmitter

class ScanditDataCaptureTextPackage : ReactPackage {
    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ): MutableList<NativeModule> = mutableListOf(
        ScanditDataCaptureTextModule(
            reactContext,
            getTextCaptureModule(reactContext)
        )
    )

    override fun createViewManagers(
        reactContext: ReactApplicationContext
    ): MutableList<ViewManager<*, *>> = mutableListOf()

    private fun getTextCaptureModule(reactContext: ReactApplicationContext): TextCaptureModule {
        val emitter = ReactNativeEventEmitter(reactContext)
        return TextCaptureModule(FrameworksTextCaptureListener(emitter)).also {
            it.onCreate(reactContext)
        }
    }
}
