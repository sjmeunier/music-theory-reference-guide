import { Note } from './';
import { Scale } from './scale.interface';

export abstract class MusicDefinitions {
    public static notes: Note[] = [
        { name: 'C', octave: 0, frequency: 16.35 },
        { name: 'C#/Db', octave: 0, frequency: 17.32 },
        { name: 'D', octave: 0, frequency: 18.35 },
        { name: 'D#/Eb', octave: 0, frequency: 19.45 },
        { name: 'E', octave: 0, frequency: 20.60 },
        { name: 'F', octave: 0, frequency: 21.83 },
        { name: 'F#/Gb', octave: 0, frequency: 23.12 },
        { name: 'G', octave: 0, frequency: 24.50 },
        { name: 'G#/Ab', octave: 0, frequency: 25.96 },
        { name: 'A', octave: 0, frequency: 27.50 },
        { name: 'A#/Bb', octave: 0, frequency: 29.14 },
        { name: 'B', octave: 0, frequency: 30.87 },
        { name: 'C', octave: 1, frequency: 32.70 },
        { name: 'C#/Db', octave: 1, frequency: 34.65 },
        { name: 'D', octave: 1, frequency: 36.71 },
        { name: 'D#/Eb', octave: 1, frequency: 38.89 },
        { name: 'E', octave: 1, frequency: 41.20 },
        { name: 'F', octave: 1, frequency: 43.65 },
        { name: 'F#/Gb', octave: 1, frequency: 46.25 },
        { name: 'G', octave: 1, frequency: 49.00 },
        { name: 'G#/Ab', octave: 1, frequency: 51.91 },
        { name: 'A', octave: 1, frequency: 55.00 },
        { name: 'A#/Bb', octave: 1, frequency: 58.27 },
        { name: 'B', octave: 1, frequency: 61.74 },
        { name: 'C', octave: 2, frequency: 65.41 },
        { name: 'C#/Db', octave: 2, frequency: 69.30 },
        { name: 'D', octave: 2, frequency: 73.42 },
        { name: 'D#/Eb', octave: 2, frequency: 77.78 },
        { name: 'E', octave: 2, frequency: 82.41 },
        { name: 'F', octave: 2, frequency: 87.31 },
        { name: 'F#/Gb', octave: 2, frequency: 92.50 },
        { name: 'G', octave: 2, frequency: 98.00 },
        { name: 'G#/Ab', octave: 2, frequency: 103.83 },
        { name: 'A', octave: 2, frequency: 110.00 },
        { name: 'A#/Bb', octave: 2, frequency: 116.54 },
        { name: 'B', octave: 2, frequency: 123.47 },
        { name: 'C', octave: 3, frequency: 130.81 },
        { name: 'C#/Db', octave: 3, frequency: 138.59 },
        { name: 'D', octave: 3, frequency: 146.83 },
        { name: 'D#/Eb', octave: 3, frequency: 155.56 },
        { name: 'E', octave: 3, frequency: 164.81 },
        { name: 'F', octave: 3, frequency: 174.61 },
        { name: 'F#/Gb', octave: 3, frequency: 185.00 },
        { name: 'G', octave: 3, frequency: 196.00 },
        { name: 'G#/Ab', octave: 3, frequency: 207.65 },
        { name: 'A', octave: 3, frequency: 220.00 },
        { name: 'A#/Bb', octave: 3, frequency: 233.08 },
        { name: 'B', octave: 3, frequency: 246.94 },
        { name: 'C', octave: 4, frequency: 261.63 },
        { name: 'C#/Db', octave: 4, frequency: 277.18 },
        { name: 'D', octave: 4, frequency: 293.66 },
        { name: 'D#/Eb', octave: 4, frequency: 311.13 },
        { name: 'E', octave: 4, frequency: 329.63 },
        { name: 'F', octave: 4, frequency: 349.23 },
        { name: 'F#/Gb', octave: 4, frequency: 369.99 },
        { name: 'G', octave: 4, frequency: 392.00 },
        { name: 'G#/Ab', octave: 4, frequency: 415.30 },
        { name: 'A', octave: 4, frequency: 440.00 },
        { name: 'A#/Bb', octave: 4, frequency: 466.16 },
        { name: 'B', octave: 4, frequency: 493.88 },
        { name: 'C', octave: 5, frequency: 523.25 },
        { name: 'C#/Db', octave: 5, frequency: 554.37 },
        { name: 'D', octave: 5, frequency: 587.33 },
        { name: 'D#/Eb', octave: 5, frequency: 622.25 },
        { name: 'E', octave: 5, frequency: 659.25 },
        { name: 'F', octave: 5, frequency: 698.46 },
        { name: 'F#/Gb', octave: 5, frequency: 739.99 },
        { name: 'G', octave: 5, frequency: 783.99 },
        { name: 'G#/Ab', octave: 5, frequency: 830.61 },
        { name: 'A', octave: 5, frequency: 880.00 },
        { name: 'A#/Bb', octave: 5, frequency: 932.33 },
        { name: 'B', octave: 5, frequency: 987.77 },
        { name: 'C', octave: 6, frequency: 1046.50 },
        { name: 'C#/Db', octave: 6, frequency: 1108.73 },
        { name: 'D', octave: 6, frequency: 1174.66 },
        { name: 'D#/Eb', octave: 6, frequency: 1244.51 },
        { name: 'E', octave: 6, frequency: 1318.51 },
        { name: 'F', octave: 6, frequency: 1396.91 },
        { name: 'F#/Gb', octave: 6, frequency: 1479.98 },
        { name: 'G', octave: 6, frequency: 1567.98 },
        { name: 'G#/Ab', octave: 6, frequency: 1661.22 },
        { name: 'A', octave: 6, frequency: 1760.00 },
        { name: 'A#/Bb', octave: 6, frequency: 1864.66 },
        { name: 'B', octave: 6, frequency: 1975.53 },
        { name: 'C', octave: 7, frequency: 2093.00 },
        { name: 'C#/Db', octave: 7, frequency: 2217.46 },
        { name: 'D', octave: 7, frequency: 2349.32 },
        { name: 'D#/Eb', octave: 7, frequency: 2489.02 },
        { name: 'E', octave: 7, frequency: 2637.02 },
        { name: 'F', octave: 7, frequency: 2793.83 },
        { name: 'F#/Gb', octave: 7, frequency: 2959.96 },
        { name: 'G', octave: 7, frequency: 3135.96 },
        { name: 'G#/Ab', octave: 7, frequency: 3322.44 },
        { name: 'A', octave: 7, frequency: 3520.00 },
        { name: 'A#/Bb', octave: 7, frequency: 3729.31 },
        { name: 'B', octave: 7, frequency: 3951.07 },
        { name: 'C', octave: 8, frequency: 4186.01 },
        { name: 'C#/Db', octave: 8, frequency: 4434.92 },
        { name: 'D', octave: 8, frequency: 4698.63 },
        { name: 'D#/Eb', octave: 8, frequency: 4978.03 },
        { name: 'E', octave: 8, frequency: 5274.04 },
        { name: 'F', octave: 8, frequency: 5587.65 },
        { name: 'F#/Gb', octave: 8, frequency: 5919.91 },
        { name: 'G', octave: 8, frequency: 6271.93 },
        { name: 'G#/Ab', octave: 8, frequency: 6644.88 },
        { name: 'A', octave: 8, frequency: 7040.00 },
        { name: 'A#/Bb', octave: 8, frequency: 7458.62 },
        { name: 'B', octave: 8, frequency: 7902.13 }
    ]

    public static scales: { [id: string]: Scale; } = {
        'major':  {
            name: 'Major',
            intervals: [0, 2, 4, 5, 7, 9, 11, 12],
            isFlatForRootIndex: [false /*C*/, true /*Db*/, false /*D*/, true /*Eb*/, false /*E*/, true /*F*/, false /*F#*/, false /*G*/, true /*Ab*/, false /*A*/, true /*Bb*/, false /*B*/ ]
        },
        
        'dorian':  {
            name: 'Dorian',
            intervals: [0, 2, 3, 5, 7, 9, 10, 12],
            isFlatForRootIndex: [true /*C*/, false /*C#*/, false /*D*/, true /*Eb*/, false /*E*/, true /*F*/, false /*F#*/, true /*G*/, false /*G#*/, false /*A*/, true /*Bb*/, false /*B*/ ]
         },
            
         'phrygian':  {
            name: 'Phrygian',
            intervals: [0, 1, 3, 5, 7, 8, 10, 12],
            isFlatForRootIndex: [true /*C*/, false /*C#*/, true /*D*/, false /*D#*/, false /*E*/, true /*F*/, false /*F#*/, true /*G*/, false /*G#*/, false /*A*/, true /*Bb*/, false /*B*/ ]
         },

        'lydian':  {
            name: 'Lydian',
            intervals: [0, 2, 4, 6, 7, 9, 11, 12],
            isFlatForRootIndex: [true /*C*/, false /*C#*/, true /*D*/, false /*D#*/, false /*E*/, true /*F*/, false /*F#*/, true /*G*/, false /*G#*/, false /*A*/, true /*Bb*/, false /*B*/ ]
         },

        'mixolydian':  {
            name: 'Mixolydian',
            intervals: [0, 2, 4, 5, 7, 9, 10, 12],
            isFlatForRootIndex: [true /*C*/, false /*C#*/, true /*D*/, false /*D#*/, false /*E*/, true /*F*/, false /*F#*/, true /*G*/, false /*G#*/, false /*A*/, true /*Bb*/, false /*B*/ ]
        },

        'aeolian':  {
            name: 'Natural Minor (Aeolian)',
            intervals: [0, 2, 3, 5, 7, 8, 10, 12],
            isFlatForRootIndex: [true /*C*/, false /*C#*/, true /*D*/, false /*D#*/, false /*E*/, true /*F*/, false /*F#*/, true /*G*/, false /*G#*/, false /*A*/, true /*Bb*/, false /*B*/ ]
         },
            
         'locrian':  {
            name: 'Locrian',
            intervals: [0, 1, 3, 5, 6, 8, 10, 12],
            isFlatForRootIndex: [true /*C*/, false /*C#*/, true /*D*/, false /*D#*/, true /*E*/, false /*F*/, false /*F#*/, true /*G*/, false /*G#*/, true /*A*/, false /*A#*/, false /*B*/ ]
         },
    }
}