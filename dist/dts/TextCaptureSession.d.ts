import { CapturedText } from './CapturedText';
/**
 * @deprecated Text Capture mode is deprecated.
 */
export declare class TextCaptureSession {
    private _newlyCapturedTexts;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    get newlyCapturedTexts(): CapturedText[];
    private _frameSequenceID;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    get frameSequenceID(): number;
    private static fromJSON;
}
