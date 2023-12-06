/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.text

import androidx.annotation.VisibleForTesting
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter
import com.scandit.datacapture.core.capture.DataCaptureContext
import com.scandit.datacapture.core.capture.DataCaptureContextListener
import com.scandit.datacapture.core.capture.DataCaptureMode
import com.scandit.datacapture.core.common.toJson
import com.scandit.datacapture.core.data.FrameData
import com.scandit.datacapture.core.json.JsonValue
import com.scandit.datacapture.reactnative.core.ScanditDataCaptureCoreModule
import com.scandit.datacapture.reactnative.core.deserializers.Deserializers
import com.scandit.datacapture.reactnative.core.deserializers.TreeLifecycleObserver
import com.scandit.datacapture.reactnative.core.utils.EventWithResult
import com.scandit.datacapture.reactnative.core.utils.LazyEventEmitter
import com.scandit.datacapture.reactnative.core.utils.writableMap
import com.scandit.datacapture.reactnative.text.data.defaults.SerializableTextCaptureDefaults
import com.scandit.datacapture.reactnative.text.data.defaults.SerializableTextCaptureOverlayDefaults
import com.scandit.datacapture.reactnative.text.data.defaults.SerializableTextCaptureSettingsDefaults
import com.scandit.datacapture.reactnative.text.data.defaults.SerializableTextDefaults
import com.scandit.datacapture.text.capture.TextCapture
import com.scandit.datacapture.text.capture.TextCaptureListener
import com.scandit.datacapture.text.capture.TextCaptureSession
import com.scandit.datacapture.text.capture.TextCaptureSettings
import com.scandit.datacapture.text.capture.serialization.TextCaptureDeserializer
import com.scandit.datacapture.text.capture.serialization.TextCaptureDeserializerListener
import com.scandit.datacapture.text.ui.TextCaptureOverlay
import java.util.concurrent.atomic.AtomicBoolean

class ScanditDataCaptureTextModule(
    private val reactContext: ReactApplicationContext,
    private val textCaptureDeserializer: TextCaptureDeserializer = TextCaptureDeserializer(),
    private val eventEmitter: RCTDeviceEventEmitter = LazyEventEmitter(reactContext)
) : ReactContextBaseJavaModule(reactContext),
    DataCaptureContextListener,
    TextCaptureDeserializerListener,
    TextCaptureListener,
    TreeLifecycleObserver.Callbacks {

    companion object {
        private const val DEFAULTS_KEY = "Defaults"

        private val DEFAULTS: SerializableTextDefaults by lazy {
            val settings = TextCaptureSettings.fromJson("{}")

            SerializableTextDefaults(
                SerializableTextCaptureDefaults(
                    TextCapture.createRecommendedCameraSettings(),
                    SerializableTextCaptureOverlayDefaults(
                        TextCaptureOverlay.defaultBrush()
                    ),
                    SerializableTextCaptureSettingsDefaults(
                        settings.recognitionDirection.toJson(),
                        settings.duplicateFilter.asMillis()
                    )
                )
            )
        }

        private const val ON_TEXT_CAPTURED_EVENT_NAME = "textCaptureListener-didCaptureText"

        private const val FIELD_SESSION = "session"
    }

    private val onTextCaptured =
        EventWithResult<Boolean>(ON_TEXT_CAPTURED_EVENT_NAME, eventEmitter)

    private var hasNativeListeners: AtomicBoolean = AtomicBoolean(false)

    private fun setHasNativeListeners(hasListeners: Boolean) {
        if (hasNativeListeners.getAndSet(hasListeners) && !hasListeners) {
            onTextCaptured.onCancel()
        }
    }

    private var dataCaptureContext: DataCaptureContext? = null
        private set(value) {
            field?.removeListener(this)
            field = value?.also { it.addListener(this) }
        }

    @VisibleForTesting
    var textCapture: TextCapture? = null
        private set(value) {
            if (value != field) {
                field?.removeListener(this)
                field = value?.also { it.addListener(this) }
            }
        }

    init {
        textCaptureDeserializer.listener = this
        Deserializers.Factory.addModeDeserializer(textCaptureDeserializer)
        TreeLifecycleObserver.callbacks += this
    }

    override fun onCatalystInstanceDestroy() {
        TreeLifecycleObserver.callbacks -= this
        Deserializers.Factory.removeModeDeserializer(textCaptureDeserializer)
        textCaptureDeserializer.listener = null

        onTreeDestroyed()
    }

    override fun getName(): String = "ScanditDataCaptureText"

    override fun getConstants(): MutableMap<String, Any> = mutableMapOf(
        DEFAULTS_KEY to DEFAULTS.toWritableMap()
    )

    override fun onTreeCreated(root: DataCaptureContext) {
        dataCaptureContext = root
    }

    override fun onTreeDestroyed() {
        textCapture = null
    }

    override fun onModeRemoved(
        dataCaptureContext: DataCaptureContext,
        dataCaptureMode: DataCaptureMode
    ) {
        reactContext.runOnNativeModulesQueueThread {
            if (dataCaptureContext == this.dataCaptureContext && dataCaptureMode == textCapture) {
                textCapture = null
            }
        }
    }

    override fun onModeDeserializationFinished(
        deserializer: TextCaptureDeserializer,
        mode: TextCapture,
        json: JsonValue
    ) {
        textCapture = mode.also {
            if (json.contains("enabled")) {
                it.isEnabled = json.requireByKeyAsBoolean("enabled")
            }
        }
    }

    @ReactMethod
    fun registerListenerForEvents() {
        setHasNativeListeners(true)
    }

    @ReactMethod
    fun unregisterListenerForEvents() {
        setHasNativeListeners(false)
    }

    override fun onTextCaptured(mode: TextCapture, session: TextCaptureSession, data: FrameData) {
        ScanditDataCaptureCoreModule.lastFrame = data

        val params = writableMap {
            putString(FIELD_SESSION, session.toJson())
        }

        if (!hasNativeListeners.get()) return
        val enabled = onTextCaptured.emitForResult(params, mode.isEnabled)
        mode.isEnabled = enabled
        ScanditDataCaptureCoreModule.lastFrame = null
    }

    @ReactMethod
    fun finishDidCaptureTextCallback(enabled: Boolean) {
        if (!hasNativeListeners.get()) return
        onTextCaptured.onResult(enabled)
    }
}
