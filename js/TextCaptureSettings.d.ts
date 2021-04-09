import { Direction } from 'scandit-react-native-datacapture-core/js/CommonEnums';
import { LocationSelection } from 'scandit-react-native-datacapture-core/js/LocationSelection';
import { DefaultSerializeable } from 'scandit-react-native-datacapture-core/js/private/Serializeable';
export declare class TextCaptureSettings extends DefaultSerializeable {
    duplicateFilter: number;
    locationSelection: LocationSelection | null;
    recognitionDirection: Direction;
    static fromJSON(json: {
        [key: string]: any;
    }): TextCaptureSettings | null;
    private constructor();
}
