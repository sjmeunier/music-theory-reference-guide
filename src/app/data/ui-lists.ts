export abstract class UILists {
    public static rootBaseNoteList = [
        { key: 'C', value: 'C' },
        { key: 'D', value: 'D' },
        { key: 'E', value: 'E' },
        { key: 'F', value: 'F' },
        { key: 'G', value: 'G' },
        { key: 'A', value: 'A' },
        { key: 'B', value: 'B' }
    ];

    public static rootAccidentalList = [
        { key: 'b', value: '\u266D' },
        { key: '', value: '\u266E' },
        { key: '#', value: '\u266F' }
    ];
    
    public static keySignatureList = [
        { key: true, value: 'Yes' },
        { key: false, value: 'No' }
    ];

    public static scaleList = [
        { key: 'major', value: 'Major' },
        { key: 'aeolian', value: 'Natural Minor' },
        { key: 'harmonic-minor', value: 'Harmonic Minor' },
        { key: 'melodic-minor', value: 'Melodic Minor' },
        { key: 'dorian', value: 'Dorian' },
        { key: 'phrygian', value: 'Phrygian' },
        { key: 'lydian', value: 'Lydian' },
        { key: 'mixolydian', value: 'Mixolydian' },
        { key: 'locrian', value: 'Locrian' },
        { key: 'major-pentatonic', value: 'Major Pentatonic' },
        { key: 'minor-pentatonic', value: 'Minor Pentatonic' },
        { key: 'suspended-pentatonic', value: 'Suspended Pentatonic' },
        { key: 'blues-major-pentatonic', value: 'Blues Major' },
        { key: 'blues-minor-pentatonic', value: 'Blues Minor' }
    ];

    public static clefList = [
        { key: 'treble', value: 'Treble' },
        { key: 'bass', value: 'Bass' },
        { key: 'alto', value: 'Alto' },
        { key: 'tenor', value: 'Tenor' },
        { key: 'soprano', value: 'Soprano' },
        { key: 'mezzo-soprano', value: 'Mezzo-soprano' },
        { key: 'baritone-c', value: 'Baritone C' },
        { key: 'baritone-f', value: 'Baritone F' },
        { key: 'subbass', value: 'Subbass' },
        { key: 'french', value: 'French' }
    ];
}