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

    public static chromaticNoteList = [
        { key: 'C', value: 'C' },
        { key: 'C#', value: 'C#/Db' },
        { key: 'D', value: 'D' },
        { key: 'D#', value: 'D#/Eb' },
        { key: 'E', value: 'E' },
        { key: 'F', value: 'F' },
        { key: 'F#', value: 'F#/Gb' },
        { key: 'G', value: 'G' },
        { key: 'G#', value: 'G#/Ab' },
        { key: 'A', value: 'A' },
        { key: 'A#', value: 'A#/Gb' },
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

    public static chordScaleList = [
        { key: 'major', value: 'Major' },
        { key: 'aeolian', value: 'Natural Minor' },
        { key: 'dorian', value: 'Dorian' },
        { key: 'phrygian', value: 'Phrygian' },
        { key: 'lydian', value: 'Lydian' },
        { key: 'mixolydian', value: 'Mixolydian' },
        { key: 'locrian', value: 'Locrian' }
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

    public static chordTypeList = [
        { key: 'major-triad', value: 'Major' },
        { key: 'minor-triad', value: 'Minor' },
        { key: 'augmented-triad', value: 'Augmented' },
        { key: 'diminished-triad', value: 'Diminished' },
        { key: 'dominant-seventh', value: 'Dominant 7th' },
        { key: 'major-seventh', value: 'Major 7th' },
        { key: 'minor-seventh', value: 'Minor 7th' },
        { key: 'min-maj-seventh', value: 'Min-maj 7th' },
        { key: 'half-diminished-seventh', value: 'Half-dim. 7th' },
        { key: 'diminished-seventh', value: 'Diminished 7th' },
        { key: 'augmented-seventh', value: 'Augmented 7th' },
        { key: 'aug-maj-seventh', value: 'Aug-maj. 7th' },
        { key: 'suspended-second', value: 'Suspended 2nd' },
        { key: 'suspended-fourth', value: 'Suspended 4th' },
        { key: 'dominant-seventh-suspended-fourth', value: 'Dom. 7th, Sus 4th' },
        { key: 'dominant-minor-ninth', value: 'Dominant minor 9th' },
        { key: 'minor-ninth', value: 'Minor 9th' },
        { key: 'major-ninth', value: 'Major 9th' },
        { key: 'minor-seventh-flat-ninth', value: 'Minor 7th \u266D5th' },
        { key: 'half-dimished-seventh-flat-ninth', value: 'Minor 7th Flat 5th Flat 9th' },
    ];

    public static chordGroupList = [
        { key: 'triads', value: 'Triads' },
        { key: 'sevenths', value: 'Sevenths' },
        { key: 'ninths', value: 'Ninths' },
    ];

    public static noteGroupingList = [
        { key: 'single', value: 'Single' },
        { key: 'chord', value: 'Chord' },
    ];
    
    public static intervalsList = [
        { key: 'perfect-unison', value: 'Perfect unison' },
        { key: 'minor-second', value: 'Minor 2nd' },
        { key: 'major-second', value: 'Major 2nd' },
        { key: 'minor-third', value: 'Minor 3rd' },
        { key: 'major-third', value: 'Major 3rd' },
        { key: 'perfect-fourth', value: 'Perfect 4th' },
        { key: 'tritone', value: 'Tritone' },
        { key: 'perfect-fifth', value: 'Perfect 5th' },
        { key: 'minor-sixth', value: 'Minor 6th' },
        { key: 'major-sixth', value: 'Major 6th' },
        { key: 'minor-seventh', value: 'Minor 7th' },
        { key: 'major-seventh', value: 'Major 7th' },
        { key: 'perfect-octave', value: 'Perfect octave' },
        { key: 'minor-ninth', value: 'Minor 9th' },
        { key: 'major-ninth', value: 'Major 9th' },
        { key: 'minor-eleventh', value: 'Minor 11th' },
        { key: 'major-eleventh', value: 'Major 11th' },
        { key: 'minor-thirteenth', value: 'Minor 13th' },
        { key: 'major-thirteenth', value: 'Major 13th' },
    ];
}