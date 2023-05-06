export interface FlickerCoordinates {
    x: number;
    y: number;
    z: number;
}


export interface FlickerProps {
    className?: any;
    text: string;
    step?: number;
    coordinates?: FlickerCoordinates;
    duration?: number;
}