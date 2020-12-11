/*
 * This file is part of the Scandit Data Capture SDK
 *
 * Copyright (C) 2020- Scandit AG. All rights reserved.
 */

package com.scandit.datacapture.reactnative.text.data.defaults

import com.facebook.react.bridge.WritableMap
import com.scandit.datacapture.core.source.CameraSettings
import com.scandit.datacapture.core.ui.style.Brush
import com.scandit.datacapture.reactnative.core.data.SerializableData
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableBrushDefaults
import com.scandit.datacapture.reactnative.core.data.defaults.SerializableCameraSettingsDefaults
import com.scandit.datacapture.reactnative.core.utils.putData
import com.scandit.datacapture.reactnative.core.utils.writableMap

internal data class SerializableTextDefaults(
    private val textCapture: SerializableTextCaptureDefaults
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putData(FIELD_TEXT_CAPTURE, textCapture)
    }

    companion object {
        private const val FIELD_TEXT_CAPTURE = "TextCapture"
    }
}

internal data class SerializableTextCaptureDefaults(
    private val recommendedCameraSettings: CameraSettings,
    private val textCaptureOverlay: SerializableTextCaptureOverlayDefaults,
    private val textCaptureSettings: SerializableTextCaptureSettingsDefaults
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putMap(FIELD_RECOMMENDED_CAMERA_SETTINGS, recommendedCameraSettings.toWritableMap())
        putData(FIELD_TEXT_CAPTURE_OVERLAY, textCaptureOverlay)
        putData(FIELD_TEXT_CAPTURE_SETTINGS, textCaptureSettings)
    }

    companion object {
        private const val FIELD_RECOMMENDED_CAMERA_SETTINGS = "RecommendedCameraSettings"
        private const val FIELD_TEXT_CAPTURE_OVERLAY = "TextCaptureOverlay"
        private const val FIELD_TEXT_CAPTURE_SETTINGS = "TextCaptureSettings"
    }
}

internal data class SerializableTextCaptureOverlayDefaults(
    private val defaultBrush: Brush
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putMap(FIELD_DEFAULT_TEXT_BRUSH, defaultBrush.toWritableMap())
    }

    companion object {
        private const val FIELD_DEFAULT_TEXT_BRUSH = "Brush"
    }
}

internal data class SerializableTextCaptureSettingsDefaults(
    private val recognitionDirection: String,
    private val duplicateFilterInMillis: Long
) : SerializableData {

    override fun toWritableMap(): WritableMap = writableMap {
        putString(FIELD_DEFAULT_RECOGNITION_DIRECTION, recognitionDirection)
        putInt(FIELD_DEFAULT_DUPLICATE_FILTER, duplicateFilterInMillis.toInt())
    }

    companion object {
        private const val FIELD_DEFAULT_RECOGNITION_DIRECTION = "recognitionDirection"
        private const val FIELD_DEFAULT_DUPLICATE_FILTER = "duplicateFilter"
    }
}

internal fun Brush.toWritableMap(): WritableMap = SerializableBrushDefaults(this).toWritableMap()

internal fun CameraSettings.toWritableMap(): WritableMap =
        SerializableCameraSettingsDefaults(this).toWritableMap()
