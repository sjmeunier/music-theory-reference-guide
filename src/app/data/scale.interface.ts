import { ScaleNote } from '.';

export interface Scale {
    name: string;
    alternateNames: string;
    intervals: number[];
    scaleNotes: { [id: string]: ScaleNote[]; }
}