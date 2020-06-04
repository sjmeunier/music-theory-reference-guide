import { ScaleNotes } from '.';

export interface Scale {
    name: string;
    alternateNames: string;
    intervals: number[];
    chords: { [id: string]: string []; };
    scaleNotes: { [id: string]: ScaleNotes; };
}