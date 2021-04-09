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
    get viewfinder(): Optional<Viewfinder>;
    set viewfinder(newViewfinder: Optional<Viewfinder>);
    get shouldShowScanAreaGuides(): boolean;
    set shouldShowScanAreaGuides(shouldShow: boolean);
    static withTextCapture(textCapture: TextCapture): TextCaptureOverlay;
    static withTextCaptureForView(textCapture: TextCapture, view: Optional<DataCaptureView>): TextCaptureOverlay;
    private constructor();
}
