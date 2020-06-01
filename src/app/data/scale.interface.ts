export interface Scale {
    name: string;
    intervals: number[]; //The intervals in the scale
    isFlatForRootIndex: boolean[];  //flag for if the specified index corresponding to root note (C = 0, C#/Db = 1, D = 2, etc) then show the scale using flats instead of sharps
}