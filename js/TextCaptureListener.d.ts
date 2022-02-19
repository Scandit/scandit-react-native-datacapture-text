import { FrameData } from 'scandit-react-native-datacapture-core/js/Camera+Related';
import { TextCapture } from './TextCapture';
import { TextCaptureSession } from './TextCaptureSession';
export interface TextCaptureListener {
    didCaptureText?(textCapture: TextCapture, session: TextCaptureSession, getFrameData: () => Promise<FrameData>): void;
}
