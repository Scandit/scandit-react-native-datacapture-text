import { Feedback } from 'scandit-react-native-datacapture-core';
import { DefaultSerializeable } from 'scandit-datacapture-frameworks-core';
export declare class TextCaptureFeedback extends DefaultSerializeable {
    success: Feedback;
    static get default(): TextCaptureFeedback;
}
