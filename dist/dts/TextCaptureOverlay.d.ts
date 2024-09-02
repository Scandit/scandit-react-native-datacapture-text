import { Brush } from 'scandit-react-native-datacapture-core';
import { DataCaptureOverlay, DataCaptureView } from 'scandit-react-native-datacapture-core';
import { DefaultSerializeable } from 'scandit-datacapture-frameworks-core';
import { Viewfinder } from 'scandit-react-native-datacapture-core';
import { TextCapture } from './TextCapture';
export declare class TextCaptureOverlay extends DefaultSerializeable implements DataCaptureOverlay {
    private type;
    private textCapture;
    private view;
    private _shouldShowScanAreaGuides;
    private _viewfinder;
    static get defaultBrush(): Brush;
    brush: Brush;
    get viewfinder(): Viewfinder | null;
    set viewfinder(newViewfinder: Viewfinder | null);
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    static withTextCapture(textCapture: TextCapture): TextCaptureOverlay;
    static withTextCaptureForView(textCapture: TextCapture, view: DataCaptureView | null): TextCaptureOverlay;
    private constructor();
}
