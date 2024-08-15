import { CameraSettings } from 'scandit-react-native-datacapture-core';
import { DataCaptureContext, DataCaptureMode } from 'scandit-react-native-datacapture-core';
import { DefaultSerializeable } from 'scandit-datacapture-frameworks-core';
import { TextCaptureFeedback } from './TextCaptureFeedback';
import { TextCaptureListener } from './TextCaptureListener';
import { TextCaptureSettings } from './TextCaptureSettings';
/**
 * @deprecated Text Capture mode is deprecated.
 */
export declare class TextCapture extends DefaultSerializeable implements DataCaptureMode {
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    get isEnabled(): boolean;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    set isEnabled(isEnabled: boolean);
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    get context(): DataCaptureContext | null;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    static get recommendedCameraSettings(): CameraSettings;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    get feedback(): TextCaptureFeedback;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
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
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    static forContext(context: DataCaptureContext | null, settings: TextCaptureSettings): TextCapture;
    private constructor();
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    applySettings(settings: TextCaptureSettings): Promise<void>;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    addListener(listener: TextCaptureListener): void;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    removeListener(listener: TextCaptureListener): void;
}
