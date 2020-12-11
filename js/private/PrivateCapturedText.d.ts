import { QuadrilateralJSON } from 'scandit-react-native-datacapture-core/js/private/PrivateCommon';
import { CapturedText } from '../CapturedText';
export interface CapturedTextJSON {
    value: string;
    location: QuadrilateralJSON;
}
export interface PrivateCapturedText {
    fromJSON(json: CapturedTextJSON): CapturedText;
}
