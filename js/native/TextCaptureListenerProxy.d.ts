import { TextCapture } from '../TextCapture';
export declare class TextCaptureListenerProxy {
    private textCapture;
    private nativeListeners;
    static forTextCapture(textCapture: TextCapture): TextCaptureListenerProxy;
    subscribeListener(): void;
    unsubscribeListener(): void;
    private notifyListenersOfDidCaptureText;
}
