import { TextCapture } from './TextCapture';
import { TextCaptureSession } from './TextCaptureSession';
export interface TextCaptureListener {
    didCaptureText?(textCapture: TextCapture, session: TextCaptureSession): void;
}
