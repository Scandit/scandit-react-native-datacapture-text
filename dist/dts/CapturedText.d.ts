import { Quadrilateral } from 'scandit-react-native-datacapture-core';
export declare class CapturedText {
    private _value;
    get value(): string;
    private _location;
    get location(): Quadrilateral;
    private static fromJSON;
}
