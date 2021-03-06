import { DataCaptureContext } from 'scandit-react-native-datacapture-core/js/DataCaptureContext';
import { PrivateDataCaptureMode } from 'scandit-react-native-datacapture-core/js/private/PrivateDataCaptureContext';
import { TextCaptureListener } from 'TextCaptureListener';
export interface PrivateTextCapture extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    isInListenerCallback: boolean;
    listeners: TextCaptureListener[];
    didChange: () => Promise<void>;
}
