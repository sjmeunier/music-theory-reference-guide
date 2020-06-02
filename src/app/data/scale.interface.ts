import { ScaleNote } from '.';

export interface Scale {
    name: string;
    intervals: number[];
    scaleNotes: { [id: string]: ScaleNote[]; }
}