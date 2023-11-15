"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
exports.TextCaptureSettings = void 0;
var LocationSelection_1 = require("scandit-react-native-datacapture-core/js/LocationSelection");
var Serializeable_1 = require("scandit-react-native-datacapture-core/js/private/Serializeable");
var Defaults_1 = require("./private/Defaults");
var TextCaptureSettings = /** @class */ (function (_super) {
    __extends(TextCaptureSettings, _super);
    function TextCaptureSettings() {
        var _this = _super.call(this) || this;
        _this.duplicateFilter = Defaults_1.Defaults.TextCapture.TextCaptureSettings.duplicateFilter;
        _this.locationSelection = null;
        _this.recognitionDirection = Defaults_1.Defaults.TextCapture.TextCaptureSettings.recognitionDirection;
        return _this;
    }
    TextCaptureSettings.fromJSON = function (json) {
        var settings = new TextCaptureSettings();
        Object.keys(json).forEach(function (key) {
            settings[key] = json[key];
        });
        return settings;
    };
    __decorate([
        (0, Serializeable_1.serializationDefault)(LocationSelection_1.NoneLocationSelection)
    ], TextCaptureSettings.prototype, "locationSelection", void 0);
    return TextCaptureSettings;
}(Serializeable_1.DefaultSerializeable));
exports.TextCaptureSettings = TextCaptureSettings;
//# sourceMappingURL=TextCaptureSettings.js.map