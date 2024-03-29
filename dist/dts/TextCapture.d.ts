import { CameraSettings } from 'scandit-react-native-datacapture-core';
import { DataCaptureContext, DataCaptureMode } from 'scandit-react-native-datacapture-core';
import { DefaultSerializeable } from 'scandit-datacapture-frameworks-core';
import { TextCaptureFeedback } from './TextCaptureFeedback';
import { TextCaptureListener } from './TextCaptureListener';
import { TextCaptureSettings } from './TextCaptureSettings';
export declare class TextCapture extends DefaultSerializeable implements DataCaptureMode {
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    get context(): DataCaptureContext | null;
    static get recommendedCameraSettings(): CameraSettings;
    get feedback(): TextCaptureFeedback;
    set feedback(feedback: TextCaptureFeedback);
    private type;
    private _isEnabled;
    private _feedback;
    private settings;
    private privateContext;
    private get _context();
    private set _context(value);
    private listeners;
    private listenerProxy;
    private isInListenerCallback;
    static forContext(context: DataCaptureContext | null, settings: TextCaptureSettings): TextCapture;
    private constructor();
    applySettings(settings: TextCaptureSettings): Promise<void>;
    addListener(listener: TextCaptureListener): void;
    removeListener(listener: TextCaptureListener): void;
}
