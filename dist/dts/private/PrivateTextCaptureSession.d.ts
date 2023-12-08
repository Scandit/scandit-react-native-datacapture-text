import { TextCaptureSession } from '../TextCaptureSession';
import { CapturedTextJSON } from './PrivateCapturedText';
export interface TextCaptureSessionJSON {
    newlyCapturedTexts: CapturedTextJSON[];
    frameSequenceId: number;
}
export interface PrivateTextCaptureSession {
    fromJSON(json: TextCaptureSessionJSON): TextCaptureSession;
}
