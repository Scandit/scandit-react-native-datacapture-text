import { Color, CameraSettings, NoViewfinder, NoneLocationSelection, Quadrilateral, Feedback, Brush } from 'scandit-react-native-datacapture-core';
import { nameForSerialization, serializationDefault, DefaultSerializeable, ignoreFromSerialization, CameraController } from 'scandit-react-native-datacapture-core/dist/core';
import { NativeModules, NativeEventEmitter } from 'react-native';

class CapturedText {
    _value;
    get value() {
        return this._value;
    }
    _location;
    get location() {
        return this._location;
    }
    static fromJSON(json) {
        const text = new CapturedText();
        text._value = json.value;
        text._location = Quadrilateral.fromJSON(json.location);
        return text;
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

class TextCaptureSession {
    _newlyCapturedTexts;
    get newlyCapturedTexts() {
        return this._newlyCapturedTexts;
    }
    _frameSequenceID;
    get frameSequenceID() {
        return this._frameSequenceID;
    }
    static fromJSON(json) {
        const session = new TextCaptureSession();
        session._newlyCapturedTexts = json.newlyCapturedTexts
            .map(CapturedText.fromJSON);
        session._frameSequenceID = json.frameSequenceId;
        return session;
    }
}

// tslint:disable:variable-name
const NativeModule$1 = NativeModules.ScanditDataCaptureText;
const EventEmitter = new NativeEventEmitter(NativeModule$1);
// tslint:enable:variable-name
var TextCaptureListenerEventName;
(function (TextCaptureListenerEventName) {
    TextCaptureListenerEventName["didCaptureText"] = "TextCaptureListener.didCaptureText";
})(TextCaptureListenerEventName || (TextCaptureListenerEventName = {}));
class TextCaptureListenerProxy {
    textCapture;
    nativeListeners = [];
    static forTextCapture(textCapture) {
        const proxy = new TextCaptureListenerProxy();
        proxy.textCapture = textCapture;
        return proxy;
    }
    subscribeListener() {
        NativeModule$1.registerListenerForEvents();
        const didCaptureTextListener = EventEmitter.addListener(TextCaptureListenerEventName.didCaptureText, (body) => {
            const payload = JSON.parse(body);
            const session = TextCaptureSession.fromJSON(JSON.parse(payload.session));
            this.notifyListenersOfDidCaptureText(session);
            NativeModule$1.finishDidCaptureTextCallback(this.textCapture.isEnabled);
        });
        this.nativeListeners.push(didCaptureTextListener);
    }
    updateTextCaptureMode() {
        return NativeModule$1.updateTextCaptureMode(JSON.stringify(this.textCapture.toJSON()));
    }
    applyTextCaptureModeSettings(newSettings) {
        return NativeModule$1.applyTextCaptureModeSettings(JSON.stringify(newSettings.toJSON()));
    }
    updateTextCaptureOverlay(overlay) {
        return NativeModule$1.updateTextCaptureOverlay(JSON.stringify(overlay.toJSON()));
    }
    setModeEnabledState(enabled) {
        return NativeModule$1.setModeEnabledState(enabled);
    }
    unsubscribeListener() {
        NativeModule$1.unregisterListenerForEvents();
        this.nativeListeners.forEach(listener => listener.remove());
        this.nativeListeners = [];
    }
    notifyListenersOfDidCaptureText(session) {
        const mode = this.textCapture;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(listener => {
            if (listener.didCaptureText) {
                listener.didCaptureText(this.textCapture, session, CameraController.getLastFrame);
            }
        });
        mode.isInListenerCallback = false;
    }
}

// tslint:disable-next-line:variable-name
const NativeModule = NativeModules.ScanditDataCaptureText;
// tslint:disable-next-line:variable-name
const Defaults = {
    TextCapture: {
        TextCaptureOverlay: {
            Brush: {
                fillColor: Color
                    .fromJSON(NativeModule.Defaults.TextCapture.TextCaptureOverlay.Brush.fillColor),
                strokeColor: Color
                    .fromJSON(NativeModule.Defaults.TextCapture.TextCaptureOverlay.Brush.strokeColor),
                strokeWidth: NativeModule.Defaults.TextCapture.TextCaptureOverlay.Brush.strokeWidth,
            },
        },
        TextCaptureSettings: {
            recognitionDirection: NativeModule.Defaults.TextCapture.TextCaptureSettings.recognitionDirection,
            duplicateFilter: NativeModule.Defaults.TextCapture.TextCaptureSettings.duplicateFilter,
        },
        RecommendedCameraSettings: CameraSettings
            .fromJSON(NativeModule.Defaults.TextCapture.RecommendedCameraSettings),
    },
};

class TextCaptureFeedback extends DefaultSerializeable {
    success = Feedback.defaultFeedback;
    static get default() {
        return new TextCaptureFeedback();
    }
}

class TextCapture extends DefaultSerializeable {
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = isEnabled;
        this.listenerProxy.setModeEnabledState(isEnabled);
    }
    get context() {
        return this._context;
    }
    static get recommendedCameraSettings() {
        return new CameraSettings(Defaults.TextCapture.RecommendedCameraSettings);
    }
    get feedback() {
        return this._feedback;
    }
    set feedback(feedback) {
        this._feedback = feedback;
        this.listenerProxy.updateTextCaptureMode();
    }
    type = 'textCapture';
    _isEnabled = true;
    _feedback = TextCaptureFeedback.default;
    settings;
    privateContext = null;
    get _context() {
        return this.privateContext;
    }
    set _context(newContext) {
        if (newContext == null) {
            this.listenerProxy.unsubscribeListener();
        }
        else if (this.privateContext == null) {
            this.listenerProxy.subscribeListener();
        }
        this.privateContext = newContext;
    }
    listeners = [];
    listenerProxy;
    isInListenerCallback = false;
    static forContext(context, settings) {
        const textCapture = new TextCapture();
        textCapture.settings = settings;
        if (context) {
            context.addMode(textCapture);
        }
        return textCapture;
    }
    constructor() {
        super();
        this.listenerProxy = TextCaptureListenerProxy.forTextCapture(this);
    }
    applySettings(settings) {
        this.settings = settings;
        return this.listenerProxy.applyTextCaptureModeSettings(settings);
    }
    addListener(listener) {
        if (this.listeners.includes(listener)) {
            return;
        }
        this.listeners.push(listener);
    }
    removeListener(listener) {
        if (!this.listeners.includes(listener)) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
}
__decorate([
    ignoreFromSerialization
], TextCapture.prototype, "_isEnabled", void 0);
__decorate([
    nameForSerialization('feedback')
], TextCapture.prototype, "_feedback", void 0);
__decorate([
    ignoreFromSerialization
], TextCapture.prototype, "privateContext", void 0);
__decorate([
    ignoreFromSerialization
], TextCapture.prototype, "listeners", void 0);
__decorate([
    ignoreFromSerialization
], TextCapture.prototype, "listenerProxy", void 0);
__decorate([
    ignoreFromSerialization
], TextCapture.prototype, "isInListenerCallback", void 0);

class TextCaptureOverlay extends DefaultSerializeable {
    type = 'textCapture';
    textCapture;
    view;
    _shouldShowScanAreaGuides = false;
    _viewfinder = null;
    static get defaultBrush() {
        return new Brush(Defaults.TextCapture.TextCaptureOverlay.Brush.fillColor, Defaults.TextCapture.TextCaptureOverlay.Brush.strokeColor, Defaults.TextCapture.TextCaptureOverlay.Brush.strokeWidth);
    }
    brush = TextCaptureOverlay.defaultBrush;
    get viewfinder() {
        return this._viewfinder;
    }
    set viewfinder(newViewfinder) {
        this._viewfinder = newViewfinder;
        this.textCapture.listenerProxy.updateTextCaptureOverlay(this);
    }
    get shouldShowScanAreaGuides() {
        return this._shouldShowScanAreaGuides;
    }
    set shouldShowScanAreaGuides(shouldShow) {
        this._shouldShowScanAreaGuides = shouldShow;
        this.textCapture.listenerProxy.updateTextCaptureOverlay(this);
    }
    static withTextCapture(textCapture) {
        return TextCaptureOverlay.withTextCaptureForView(textCapture, null);
    }
    static withTextCaptureForView(textCapture, view) {
        const overlay = new TextCaptureOverlay();
        overlay.textCapture = textCapture;
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    }
    constructor() {
        super();
    }
}
__decorate([
    ignoreFromSerialization
], TextCaptureOverlay.prototype, "textCapture", void 0);
__decorate([
    ignoreFromSerialization
], TextCaptureOverlay.prototype, "view", void 0);
__decorate([
    nameForSerialization('shouldShowScanAreaGuides')
], TextCaptureOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
__decorate([
    serializationDefault(NoViewfinder),
    nameForSerialization('viewfinder')
], TextCaptureOverlay.prototype, "_viewfinder", void 0);

class TextCaptureSettings extends DefaultSerializeable {
    duplicateFilter = Defaults.TextCapture.TextCaptureSettings.duplicateFilter;
    locationSelection = null;
    recognitionDirection = Defaults.TextCapture.TextCaptureSettings.recognitionDirection;
    static fromJSON(json) {
        const settings = new TextCaptureSettings();
        Object.keys(json).forEach(key => {
            settings[key] = json[key];
        });
        return settings;
    }
    constructor() {
        super();
    }
}
__decorate([
    serializationDefault(NoneLocationSelection)
], TextCaptureSettings.prototype, "locationSelection", void 0);

export { CapturedText, TextCapture, TextCaptureFeedback, TextCaptureOverlay, TextCaptureSession, TextCaptureSettings };
