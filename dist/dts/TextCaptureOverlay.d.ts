import { Brush } from 'scandit-react-native-datacapture-core';
import { DataCaptureOverlay, DataCaptureView } from 'scandit-react-native-datacapture-core';
import { DefaultSerializeable } from 'scandit-datacapture-frameworks-core';
import { Viewfinder } from 'scandit-react-native-datacapture-core';
import { TextCapture } from './TextCapture';
/**
 * @deprecated Text Capture mode is deprecated.
 */
export declare class TextCaptureOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private textCapture;
    private view;
    private _shouldShowScanAreaGuides;
    private _viewfinder;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    static get defaultBrush(): Brush;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    brush: Brush;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    get viewfinder(): Viewfinder | null;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    set viewfinder(newViewfinder: Viewfinder | null);
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    get shouldShowScanAreaGuides(): boolean;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    set shouldShowScanAreaGuides(shouldShow: boolean);
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    static withTextCapture(textCapture: TextCapture): TextCaptureOverlay;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    static withTextCaptureForView(textCapture: TextCapture, view: DataCaptureView | null): TextCaptureOverlay;
    private constructor();
}
