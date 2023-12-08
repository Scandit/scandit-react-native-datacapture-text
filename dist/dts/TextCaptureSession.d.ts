import { CapturedText } from './CapturedText';
export declare class TextCaptureSession {
    private _newlyCapturedTexts;
    get newlyCapturedTexts(): CapturedText[];
    private _frameSequenceID;
    get frameSequenceID(): number;
    private static fromJSON;
}
