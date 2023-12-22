import { QuadrilateralJSON } from 'scandit-datacapture-frameworks-core';
import { CapturedText } from '../CapturedText';
export interface CapturedTextJSON {
    value: string;
    location: QuadrilateralJSON;
}
export interface PrivateCapturedText {
    fromJSON(json: CapturedTextJSON): CapturedText;
}
