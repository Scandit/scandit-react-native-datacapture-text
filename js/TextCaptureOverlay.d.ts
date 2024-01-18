import { Brush } from 'scandit-react-native-datacapture-core/js/Common';
import { DataCaptureOverlay, DataCaptureView } from 'scandit-react-native-datacapture-core/js/DataCaptureView';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
import { Viewfinder } from 'scandit-react-native-datacapture-core/js/Viewfinder';
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
