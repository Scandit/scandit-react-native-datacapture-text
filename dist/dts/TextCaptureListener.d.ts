import { FrameData } from 'scandit-react-native-datacapture-core';
import { TextCapture } from './TextCapture';
import { TextCaptureSession } from './TextCaptureSession';
export interface TextCaptureListener {
    didCaptureText?(textCapture: TextCapture, session: TextCaptureSession, getFrameData: () => Promise<FrameData>): void;
}
