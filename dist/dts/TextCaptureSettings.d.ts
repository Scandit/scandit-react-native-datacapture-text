import { Direction } from 'scandit-react-native-datacapture-core';
import { LocationSelection } from 'scandit-react-native-datacapture-core';
import { DefaultSerializeable } from 'scandit-datacapture-frameworks-core';
/**
 * @deprecated Text Capture mode is deprecated.
 */
export declare class TextCaptureSettings extends DefaultSerializeable {
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    duplicateFilter: number;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    locationSelection: LocationSelection | null;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    recognitionDirection: Direction;
    /**
     * @deprecated Text Capture mode is deprecated.
     */
    static fromJSON(json: {
        [key: string]: any;
    }): TextCaptureSettings | null;
    private constructor();
}
