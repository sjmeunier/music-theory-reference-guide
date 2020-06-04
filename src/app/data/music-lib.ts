export abstract class MusicLib {
    public static getBaseNoteIdFromSymbol(note: string): number {
        var baseNoteId: number;
        switch(note) {
            case 'C':
            case 'B#':
              baseNoteId = 0;
              break;
            case 'C#':
            case 'Db':
              baseNoteId = 1;
              break;      
            case 'D':
              baseNoteId = 2;
              break;      
            case 'D#':
            case 'Eb':
              baseNoteId = 3;
              break;      
            case 'E':
            case 'Fb':
              baseNoteId = 4;
              break;      
            case 'E#':
            case 'F':
              baseNoteId = 5;
              break;      
            case 'F#':
            case 'Gb':
              baseNoteId = 6;
              break;      
            case 'G':
              baseNoteId = 7;
              break;      
            case 'G#':
            case 'Ab':
              baseNoteId = 8;
              break;      
            case 'A':
              baseNoteId = 9;
              break;      
            case 'A#':
            case 'Bb':
              baseNoteId = 10;
              break;      
            case 'B':
            case 'Cb':
              baseNoteId = 11;
              break;      
        }
        return baseNoteId;
    }

    public static prettifyAccidentals(noteName: string): string {
        noteName = noteName[0] + noteName.slice(1).replace('bb', '\uD834\uDD2B');
        noteName = noteName[0] + noteName.slice(1).replace('##', '\uD834\uDD2A');
        noteName = noteName[0] + noteName.slice(1).replace('b', '\u266D');
        noteName = noteName[0] + noteName.slice(1).replace('#', '\u266F');
        return noteName;
      }
}