import { DataCaptureContext } from 'scandit-react-native-datacapture-core';
import { PrivateDataCaptureMode } from 'scandit-datacapture-frameworks-core';
import { TextCaptureListener } from 'TextCaptureListener';
import { TextCaptureListenerProxy } from '../native/TextCaptureListenerProxy';
export interface PrivateTextCapture extends PrivateDataCaptureMode {
    _context: DataCaptureContext | null;
    isInListenerCallback: boolean;
    listeners: TextCaptureListener[];
    listenerProxy: TextCaptureListenerProxy;
}
