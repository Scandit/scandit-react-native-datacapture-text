"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapturedText = void 0;
var Common_1 = require("scandit-react-native-datacapture-core/js/Common");
var CapturedText = /** @class */ (function () {
    function CapturedText() {
    }
    Object.defineProperty(CapturedText.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CapturedText.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    CapturedText.fromJSON = function (json) {
        var text = new CapturedText();
        text._value = json.value;
        text._location = Common_1.Quadrilateral.fromJSON(json.location);
        return text;
    };
    return CapturedText;
}());
exports.CapturedText = CapturedText;
//# sourceMappingURL=CapturedText.js.map