import { DataCaptureContext } from 'scandit-react-native-datacapture-core';
import { PrivateDataCaptureMode } from 'scandit-datacapture-frameworks-core';
import { TextCaptureListener } from 'TextCaptureListener';
export interface PrivateTextCapture extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    isInListenerCallback: boolean;
    listeners: TextCaptureListener[];
    didChange: () => Promise<void>;
}
