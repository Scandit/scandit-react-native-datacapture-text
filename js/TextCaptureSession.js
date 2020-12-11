"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCaptureSession = void 0;
var CapturedText_1 = require("./CapturedText");
var TextCaptureSession = /** @class */ (function () {
    function TextCaptureSession() {
    }
    Object.defineProperty(TextCaptureSession.prototype, "newlyCapturedTexts", {
        get: function () {
            return this._newlyCapturedTexts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextCaptureSession.prototype, "frameSequenceID", {
        get: function () {
            return this._frameSequenceID;
        },
        enumerable: false,
        configurable: true
    });
    TextCaptureSession.fromJSON = function (json) {
        var session = new TextCaptureSession();
        session._newlyCapturedTexts = json.newlyCapturedTexts
            .map(CapturedText_1.CapturedText.fromJSON);
        session._frameSequenceID = json.frameSequenceId;
        return session;
    };
    return TextCaptureSession;
}());
exports.TextCaptureSession = TextCaptureSession;
//# sourceMappingURL=TextCaptureSession.js.map