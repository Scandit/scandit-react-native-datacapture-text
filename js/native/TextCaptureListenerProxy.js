"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCaptureListenerProxy = void 0;
var react_native_1 = require("react-native");
var TextCaptureSession_1 = require("../TextCaptureSession");
// tslint:disable:variable-name
var NativeModule = react_native_1.NativeModules.ScanditDataCaptureText;
var EventEmitter = new react_native_1.NativeEventEmitter(NativeModule);
// tslint:enable:variable-name
var TextCaptureListenerEventName;
(function (TextCaptureListenerEventName) {
    TextCaptureListenerEventName["didCaptureText"] = "textCaptureListener-didCaptureText";
})(TextCaptureListenerEventName || (TextCaptureListenerEventName = {}));
var TextCaptureListenerProxy = /** @class */ (function () {
    function TextCaptureListenerProxy() {
        this.nativeListeners = [];
    }
    TextCaptureListenerProxy.forTextCapture = function (textCapture) {
        var proxy = new TextCaptureListenerProxy();
        proxy.textCapture = textCapture;
        return proxy;
    };
    TextCaptureListenerProxy.prototype.subscribeListener = function () {
        var _this = this;
        NativeModule.registerListenerForEvents();
        var didCaptureTextListener = EventEmitter.addListener(TextCaptureListenerEventName.didCaptureText, function (body) {
            var session = TextCaptureSession_1.TextCaptureSession.fromJSON(JSON.parse(body.session));
            _this.notifyListenersOfDidCaptureText(session);
            NativeModule.finishDidCaptureTextCallback(_this.textCapture.isEnabled);
        });
        this.nativeListeners.push(didCaptureTextListener);
    };
    TextCaptureListenerProxy.prototype.unsubscribeListener = function () {
        NativeModule.unregisterListenerForEvents();
        this.nativeListeners.forEach(function (listener) { return listener.remove(); });
        this.nativeListeners = [];
    };
    TextCaptureListenerProxy.prototype.notifyListenersOfDidCaptureText = function (session) {
        var _this = this;
        var mode = this.textCapture;
        mode.isInListenerCallback = true;
        mode.listeners.forEach(function (listener) {
            if (listener.didCaptureText) {
                listener.didCaptureText(_this.textCapture, session);
            }
        });
        mode.isInListenerCallback = false;
    };
    return TextCaptureListenerProxy;
}());
exports.TextCaptureListenerProxy = TextCaptureListenerProxy;
//# sourceMappingURL=TextCaptureListenerProxy.js.map