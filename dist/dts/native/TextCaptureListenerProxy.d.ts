import { TextCapture } from '../TextCapture';
import { TextCaptureSettings } from '../TextCaptureSettings';
import { TextCaptureOverlay } from '../TextCaptureOverlay';
export declare class TextCaptureListenerProxy {
    private textCapture;
    private nativeListeners;
    static forTextCapture(textCapture: TextCapture): TextCaptureListenerProxy;
    subscribeListener(): void;
    updateTextCaptureMode(): Promise<void>;
    applyTextCaptureModeSettings(newSettings: TextCaptureSettings): Promise<void>;
    updateTextCaptureOverlay(overlay: TextCaptureOverlay): Promise<void>;
    setModeEnabledState(enabled: boolean): Promise<void>;
    unsubscribeListener(): void;
    private notifyListenersOfDidCaptureText;
}
