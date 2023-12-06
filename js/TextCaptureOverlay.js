"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCaptureOverlay = void 0;
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var Viewfinder_1 = require("scandit-react-native-datacapture-core/js/Viewfinder");
var Defaults_1 = require("./private/Defaults");
var TextCaptureOverlay = /** @class */ (function (_super) {
    __extends(TextCaptureOverlay, _super);
    function TextCaptureOverlay() {
        var _this = _super.call(this) || this;
        _this.type = 'textCapture';
        _this._shouldShowScanAreaGuides = false;
        _this._viewfinder = null;
        _this.brush = TextCaptureOverlay.defaultBrush;
        return _this;
    }
    Object.defineProperty(TextCaptureOverlay, "defaultBrush", {
        get: function () {
            return new Common_1.Brush(Defaults_1.Defaults.TextCapture.TextCaptureOverlay.Brush.fillColor, Defaults_1.Defaults.TextCapture.TextCaptureOverlay.Brush.strokeColor, Defaults_1.Defaults.TextCapture.TextCaptureOverlay.Brush.strokeWidth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextCaptureOverlay.prototype, "viewfinder", {
        get: function () {
            return this._viewfinder;
        },
        set: function (newViewfinder) {
            this._viewfinder = newViewfinder;
            this.textCapture.didChange();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextCaptureOverlay.prototype, "shouldShowScanAreaGuides", {
        get: function () {
            return this._shouldShowScanAreaGuides;
        },
        set: function (shouldShow) {
            this._shouldShowScanAreaGuides = shouldShow;
            this.textCapture.didChange();
        },
        enumerable: false,
        configurable: true
    });
    TextCaptureOverlay.withTextCapture = function (textCapture) {
        return TextCaptureOverlay.withTextCaptureForView(textCapture, null);
    };
    TextCaptureOverlay.withTextCaptureForView = function (textCapture, view) {
        var overlay = new TextCaptureOverlay();
        overlay.textCapture = textCapture;
        if (view) {
            view.addOverlay(overlay);
        }
        return overlay;
    };
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], TextCaptureOverlay.prototype, "textCapture", void 0);
    __decorate([
        Serializeable_1.ignoreFromSerialization
    ], TextCaptureOverlay.prototype, "view", void 0);
    __decorate([
        Serializeable_1.nameForSerialization('shouldShowScanAreaGuides')
    ], TextCaptureOverlay.prototype, "_shouldShowScanAreaGuides", void 0);
    __decorate([
        Serializeable_1.serializationDefault(Viewfinder_1.NoViewfinder),
        Serializeable_1.nameForSerialization('viewfinder')
    ], TextCaptureOverlay.prototype, "_viewfinder", void 0);
    return TextCaptureOverlay;
}(Serializeable_1.DefaultSerializeable));
exports.TextCaptureOverlay = TextCaptureOverlay;
//# sourceMappingURL=TextCaptureOverlay.js.map