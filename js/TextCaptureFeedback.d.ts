import { Feedback } from 'scandit-react-native-datacapture-core/js/Feedback';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export declare class TextCaptureFeedback extends DefaultSerializeable {
    success: Feedback;
    static get default(): TextCaptureFeedback;
}
