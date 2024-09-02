import { Direction } from 'scandit-react-native-datacapture-core';
import { LocationSelection } from 'scandit-react-native-datacapture-core';
import { DefaultSerializeable } from 'scandit-datacapture-frameworks-core';
export declare class TextCaptureSettings extends DefaultSerializeable {
    duplicateFilter: number;
    locationSelection: LocationSelection | null;
    recognitionDirection: Direction;
    static fromJSON(json: {
        [key: string]: any;
    }): TextCaptureSettings | null;
    private constructor();
}
