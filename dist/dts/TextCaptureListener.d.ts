import { FrameData } from 'scandit-react-native-datacapture-core';
import { TextCapture } from './TextCapture';
import { TextCaptureSession } from './TextCaptureSession';
/**
 * @deprecated Text Capture mode is deprecated.
 */
export interface TextCaptureListener {
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    didCaptureText?(textCapture: TextCapture, session: TextCaptureSession, getFrameData: () => Promise<FrameData>): void;
}
