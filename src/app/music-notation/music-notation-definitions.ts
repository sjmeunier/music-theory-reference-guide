import { MusicGroupDefinition } from './music-group-definition.interface';

export abstract class MusicNotationDefinitions {
    public static groupDefinitions: { [id: string]: MusicGroupDefinition; } = {
        'lines': {
          name: 'Lines',
          definitions: [
            { name: 'Stave/Staff',
              description: 'Each line and space on the stave corresponds to one note of the diatonic scale. Notes above or below the five lines are deonoted using ledger lines.',
              imagePath: './assets/images/music-notation/lines-stave.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { name: 'Bar line',
              description: 'Separates measures on the stave. Also used for time signature changes. In some types of music it can be extended to connect multiple staves',
              imagePath: './assets/images/music-notation/lines-bar.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { name: 'Double bar line',
              description: 'Separates two sections of music',
              imagePath: './assets/images/music-notation/lines-doublebar.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { name: 'Bold double bar line',
              description: 'Denotes the end of a movement or composition',
              imagePath: './assets/images/music-notation/lines-endbar.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { name: 'Dotted bar line',
              description: 'Subdivides long measures of complex meter into shorter segments',
              imagePath: './assets/images/music-notation/lines-dottedbar.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { name: 'Bracket',
              description: 'Connects two or more lines of music that is played simultaneously, usually of different instruments or vocal parts',
              imagePath: './assets/images/music-notation/lines-bracket.jpg',
              imageHeight: 80,
              imageMargins: 0
            },
            { name: 'Brace',
              description: 'Also known as an accolated. Connects two or more lines of music that is played simultaneously for a single instrument, normally for piano, keyboard, harp or some percussion music',
              imagePath: './assets/images/music-notation/lines-brace.svg',
              imageHeight: 80,
              imageMargins: 0
            }
          ]
        },
        'clefs': {
          name: 'Clefs',
          definitions: [
            {
                name: 'Treble clef (G clef)',
                description: 'The centre of the spiral denotes the pitch G above middle C. Middle C is the first ledger line below the staff',
                imagePath: './assets/images/music-notation/clefs-GClef.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Bass clef (F clef)',
                description: 'The line between the dots denotes the pitch F below middle C. Middle C is the first ledger line above the staff',
                imagePath: './assets/images/music-notation/clefs-fclef.svg',
                imageHeight: 40,
                imageMargins: 0
            },
            {
                name: 'C clef (Alto and Tenor)',
                description: 'The clef points to middle C.',
                imagePath: './assets/images/music-notation/clefs-cclef.svg',
                imageHeight: 40,
                imageMargins: 0
            },
            {
                name: 'Neutral clef',
                description: 'Used for pitchless instruments. Each line then represents a specific percussion instrument in a set',
                imagePath: './assets/images/music-notation/clefs-neutralclef.svg',
                imageHeight: 40,
                imageMargins: 0
            },
            {
                name: 'Octave clef',
                description: 'Treble and bass clefs can be modified with octave numbers. Eight or Fifteen represents a pitch shift of one or two octaves respectively. If the number is below the clef, then the pitch is lowered, and if it is above, then the pitch is increased.',
                imagePath: './assets/images/music-notation/clefs-octaveclef.svg',
                imageHeight: 80,
                imageMargins: -20
            },
          ]
        },
        'notes': {
          name: 'Notes',
          definitions: [
            {
              name: 'Large / Octuple whole note',
              description: '',
              imagePath: './assets/images/music-notation/notes-octwholenote.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { 
              name: 'Long / Quadruple whole note',
              description: '',
              imagePath: './assets/images/music-notation/notes-quadwholenote.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { 
              name: 'Breve / Double whole note',
              description: '',
              imagePath: './assets/images/music-notation/notes-doublewholenote.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { 
              name: 'Semibreve / Whole note',
              description: '',
              imagePath: './assets/images/music-notation/notes-wholenote.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { 
              name: 'Minim / Half note',
              description: '',
              imagePath: './assets/images/music-notation/notes-halfnote.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { 
              name: 'Crotchet / Quarter note',
              description: '',
              imagePath: './assets/images/music-notation/notes-quarternote.svg',
              imageHeight: 80,
              imageMargins: -20
            },
            { 
              name: 'Quaver / Eighth note',
              description: '',
              imagePath: './assets/images/music-notation/notes-eighthnote.svg',
              imageHeight: 80,
              imageMargins: -20
            },
            { 
              name: 'Semiquaver / Sixteenth note',
              description: '',
              imagePath: './assets/images/music-notation/notes-sixteenthnote.svg',
              imageHeight: 80,
              imageMargins: -20
            },
            { 
              name: 'Demisemiquaver / Thirty-second note',
              description: '',
              imagePath: './assets/images/music-notation/notes-thirtysecondnote.svg',
              imageHeight: 80,
              imageMargins: -20
            },
            { 
              name: 'Hemidemisemiquaver / Sixty-fourth note',
              description: '',
              imagePath: './assets/images/music-notation/notes-sixtyfourthnote.svg',
              imageHeight: 54,
              imageMargins: -10
            },
            { 
              name: 'Semihemidemisemiquaver / Hundred twenty-eigth note',
              description: '',
              imagePath: './assets/images/music-notation/notes-hundredtwentyeighthnote.svg',
              imageHeight: 60,
              imageMargins: -10
            },
            { 
              name: 'Demisemihemidemisemiquaver / Two hundred fifty-sixth note',
              description: '',
              imagePath: './assets/images/music-notation/notes-semigarrapatea.svg',
              imageHeight: 80,
              imageMargins: -20
            },
            { 
              name: 'Beamed notes',
              description: 'Connect eigth notes (and shorter) together, often to reflect the rhythmic grouping of the notes',
              imagePath: './assets/images/music-notation/notes-beam.svg',
              imageHeight: 80,
              imageMargins: -10
            },
            { 
              name: 'Dotted note',
              description: 'The note is lengthened by a duration of one-half',
              imagePath: './assets/images/music-notation/notes-dotnote.svg',
              imageHeight: 80,
              imageMargins: -10
            },
            { 
              name: 'Ghost note',
              description: 'A note with rhythmic value, but no discernable pitch. Used mainly for percussion, but also for spoken words.',
              imagePath: './assets/images/music-notation/notes-ghostnote.png',
              imageHeight: 80,
              imageMargins: -10
            },
          ]
        },
        'rests': {
          name: 'Rests',
          definitions: [
            { 
              name: 'Large / Octuple whole rest',
              description: '',
              imagePath: './assets/images/music-notation/rests-octwholerest.svg',
              imageHeight: 80,
              imageMargins: -20
            },
            { 
              name: 'Long / Quadruple whole rest',
              description: '',
              imagePath: './assets/images/music-notation/rests-quadwholerest.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { 
              name: 'Breve / Double whole rest',
              description: '',
              imagePath: './assets/images/music-notation/rests-doublewholerest.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { 
              name: 'Semibreve / Whole rest',
              description: '',
              imagePath: './assets/images/music-notation/rests-wholerest.svg',
              imageHeight: 60,
              imageMargins: -10
            },
            { 
              name: 'Minim / Half rest',
              description: '',
              imagePath: './assets/images/music-notation/rests-halfrest.svg',
              imageHeight: 60,
              imageMargins: -10
            },
            { 
              name: 'Crotchet / Quarter rest',
              description: '',
              imagePath: './assets/images/music-notation/rests-quarterrest.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { 
              name: 'Quaver / Eighth rest',
              description: '',
              imagePath: './assets/images/music-notation/rests-eighthrest.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { 
              name: 'Semiquaver / Sixteenth rest',
              description: '',
              imagePath: './assets/images/music-notation/rests-sixteenthrest.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { 
              name: 'Demisemiquaver / Thirty-second rest',
              description: '',
              imagePath: './assets/images/music-notation/rests-thirtysecondrest.svg',
              imageHeight: 40,
              imageMargins: 0
            },
            { 
              name: 'Hemidemisemiquaver / Sixty-fourth rest',
              description: '',
              imagePath: './assets/images/music-notation/rests-sixtyfourthrest.svg',
              imageHeight: 54,
              imageMargins: -10
            },
            { 
              name: 'Semihemidemisemiquaver / Hundred twenty-eigth rest',
              description: '',
              imagePath: './assets/images/music-notation/rests-hundredtwentyeighthrest.svg',
              imageHeight: 80,
              imageMargins: -20
            },
            { 
              name: 'Demisemihemidemisemiquaver / Two hundred fifty-sixth rest',
              description: '',
              imagePath: './assets/images/music-notation/rests-semigarrapatearest.svg',
              imageHeight: 80,
              imageMargins: -20
            },
            { 
              name: 'Multi-measure rest',
              description: 'Indicates the number of measures to rest for',
              imagePath: './assets/images/music-notation/rests-measurerest.svg',
              imageHeight: 60,
              imageMargins: -10
            },
          ]
        },
        'accidentals': {
          name: 'Accidentals',
          definitions: [
            {
              name: 'Natural',
              description: 'Changes any sharp or flat defined by the key signature, or cancels any previous accidental',
              imagePath: './assets/images/music-notation/accidentals-natural.svg',
              imageHeight: 80,
              imageMargins: -20
            },
            {
              name: 'Flat',
              description: 'Lowers pitch by one semitone',
              imagePath: './assets/images/music-notation/accidentals-flat.svg',
              imageHeight: 80,
              imageMargins: -20
            },
            {
              name: 'Double flat',
              description: 'Lowers pitch by two semitones',
              imagePath: './assets/images/music-notation/accidentals-doubleflat.svg',
              imageHeight: 80,
              imageMargins: -20
            },
            {
              name: 'Sharp',
              description: 'Increases pitch by one semitone',
              imagePath: './assets/images/music-notation/accidentals-sharp.svg',
              imageHeight: 80,
              imageMargins: -20
           },
            {
              name: 'Double sharp',
              description: 'Increases pitch by two semitones',
              imagePath: './assets/images/music-notation/accidentals-doublesharp.svg',
              imageHeight: 80,
              imageMargins: -20
            },
          ]
        },
        'dynamics': {
          name: 'Dynamics',
          definitions: [
            {
                name: 'Crescendo',
                description: 'Gradual increase in volume',
                imagePath: './assets/images/music-notation/dynamics-crescendo.svg',
                imageHeight: 40,
                imageMargins: 0
            },
            {
                name: 'Diminuendo / Decrescendo',
                description: 'Gradual descrease in volume',
                imagePath: './assets/images/music-notation/dynamics-diminuendo.svg',
                imageHeight: 40,
                imageMargins: 0
            },
            {
                name: 'Pianississimo',
                description: 'Extremely softly',
                imagePath: './assets/images/music-notation/dynamics-pianississimo.svg',
                imageHeight: 16,
                imageMargins: 0
            },
            {
                name: 'Pianissimo',
                description: 'Very softly',
                imagePath: './assets/images/music-notation/dynamics-pianissimo.png',
                imageHeight: 16,
                imageMargins: 0
            },
            {
                name: 'Piano',
                description: 'Softly',
                imagePath: './assets/images/music-notation/dynamics-piano.svg',
                imageHeight: 16,
                imageMargins: 0
            },
            {
                name: 'Mezzo piano',
                description: 'Moderately softly',
                imagePath: './assets/images/music-notation/dynamics-mezzopiano.svg',
                imageHeight: 16,
                imageMargins: 0
            },
            {
                name: 'Mezzo forte',
                description: 'Moderately loudly. If no dynamic is shown, then this is the assumed dynamic.',
                imagePath: './assets/images/music-notation/dynamics-mezzoforte.svg',
                imageHeight: 20,
                imageMargins: 0
            },
            {
                name: 'Forte',
                description: 'Loudly',
                imagePath: './assets/images/music-notation/dynamics-forte.svg',
                imageHeight: 20,
                imageMargins: 0
            },
            {
                name: 'Fortissimo',
                description: 'Very loudly',
                imagePath: './assets/images/music-notation/dynamics-fortissimo.svg',
                imageHeight: 20,
                imageMargins: 0
            },
            {
                name: 'Fortississimo',
                description: 'Extremely loudly',
                imagePath: './assets/images/music-notation/dynamics-fortississimo.svg',
                imageHeight: 20,
                imageMargins: 0
            },
            {
                name: 'Sforzando',
                description: 'Abrupt, firect accent on single note or chord. If written in full, it applies to all notes under the text.',
                imagePath: './assets/images/music-notation/dynamics-sforzando.svg',
                imageHeight: 20,
                imageMargins: 0
            },
            {
                name: 'Forte-piano',
                description: 'Section of musc that should start loudly, then immediately softly',
                imagePath: './assets/images/music-notation/dynamics-fortepiano.png',
                imageHeight: 40,
                imageMargins: 0
            },
            {
                name: 'Breath mark',
                description: 'Tells the performer to take a breath, but does not affect overall tempo. For bowed instruments, it indicates that the bow should be lifted and then play the next note with downward (or upward, if marked) bow',
                imagePath: './assets/images/music-notation/dynamics-breath.svg',
                imageHeight: 40,
                imageMargins: 0
            },
            {
                name: 'Caesura',
                description: 'A pause during which time is not counted.',
                imagePath: './assets/images/music-notation/dynamics-caesura.svg',
                imageHeight: 40,
                imageMargins: 0
            },
          ]
        },
        'articulations': {
          name: 'Articulations',
          definitions: [
            {
                name: 'Staccato',
                description: 'The note should be played shorter than notated, usually half the value.',
                imagePath: './assets/images/music-notation/articulations-staccato.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Staccatissimo / Spiccato',
                description: 'Indicates a longer silence after the note, as compared to Staccato. Usually apploed to quarter notes or shorter. For bowed instruments, it indicates a technique in which the bow bounces lightly on the string',
                imagePath: './assets/images/music-notation/articulations-staccatissimo.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Accent',
                description: 'The note should be played louder than the surrounding notes.',
                imagePath: './assets/images/music-notation/articulations-marcato.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Tenuto',
                description: 'The note should be played at its full value, or slightly longer.',
                imagePath: './assets/images/music-notation/articulations-tenuto.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Marcato',
                description: 'The note should be played somewhat louder or more forcefully than a regular accent.',
                imagePath: './assets/images/music-notation/articulations-strong-marcato.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Fermata',
                description: 'The note, chord, or rest, should be sustained longer than usual. The fermata can be held as long as the performer wants, but is often twice as long as the original note value.',
                imagePath: './assets/images/music-notation/articulations-fermata.svg',
                imageHeight: 80,
                imageMargins: -20
            },
          ]
        },
        'ornaments': {
          name: 'Ornaments',
          definitions: [
            {
                name: 'Trill',
                description: 'Rapid alternation between the specified note, and the next highest note in the key. If followed by a wavy line, then the trill should be extended.',
                imagePath: './assets/images/music-notation/ornaments-trill.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Upper mordent',
                description: 'Rapid play the principal note, then the next higher note in the key, then returning to the principal note for the remaining duration.',
                imagePath: './assets/images/music-notation/ornaments-mordent.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Lower (or inverted) mordent',
                description: 'Rapid alternation between the specified note, and the note below it in the key, then returning to the principal note for the remaining duration.',
                imagePath: './assets/images/music-notation/ornaments-inverted-mordent.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Appoggiatura / Grace note',
                description: 'First half of the principal note\'s duration has the pitch of the grace note',
                imagePath: './assets/images/music-notation/ornaments-appoggiatura.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Acciaccatura',
                description: 'Similar to Appoggiatura, but the grace note gets almost no time.',
                imagePath: './assets/images/music-notation/ornaments-acciaccatura.svg',
                imageHeight: 80,
                imageMargins: -20
            },
          ]
        },
        'time-signatures': {
          name: 'Time signatures',
          definitions: [
            {
                name: 'Specific time',
                description: 'The bottom number is the note value, with a 4 being quarter notes. The top number is the number of notes per measure.',
                imagePath: './assets/images/music-notation/timesig-timesig.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Common time',
                description: 'Represents 4/4 time',
                imagePath: './assets/images/music-notation/timesig-commontime.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Cut time / Alla breva',
                description: 'Represents 2/2 time',
                imagePath: './assets/images/music-notation/timesig-cuttime.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Metronome mark',
                description: 'Denotes the number of beats per minute',
                imagePath: './assets/images/music-notation/timesig-metronome.svg',
                imageHeight: 60,
                imageMargins: 0
            },
          ]
        },
        'note-relationships': {
          name: 'Note relationships',
          definitions: [
            {
                name: 'Tie',
                description: 'Two or more notes played as one note',
                imagePath: './assets/images/music-notation/noterelationships-tie.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Slur',
                description: 'Two or more notes played as one uninterrupted phrase. This is visually identical to a ligature, which connects a passage of music over several measures, but does not necessarily indicate that it should be slurred.',
                imagePath: './assets/images/music-notation/noterelationships-legato.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Glissando / Portamento',
                description: 'A continuous unbroken glide from one note to another, playing all the notes inbetween. For instruments with distinct notes, it is known as a Glissando. For instruments capable of continuous pitch changes, such as violin, this is known as Portamento',
                imagePath: './assets/images/music-notation/noterelationships-glissando.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Tuplet',
                description: 'Irregular number of notes played within the stnadard duration. For example, three notes played in the duraton of two notes.',
                imagePath: './assets/images/music-notation/noterelationships-triplet.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Chord',
                description: 'Multiple notes played together',
                imagePath: './assets/images/music-notation/noterelationships-triad.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Arpeggiated chord',
                description: 'A chord with the notes played in rapid succession. Also known as a broken chord, or rolled chord',
                imagePath: './assets/images/music-notation/noterelationships-arpeggio.svg',
                imageHeight: 80,
                imageMargins: -20
            },
          ]
        },
        'repetition': {
          name: 'Repetition and Codas',
          definitions: [
            {
                name: 'Tremolo',
                description: 'A rapidly repeating note. If the tremelo is between lines, then the two notes area rapidly alternated. The number of slashes through the stem denotes the frequency of the alternation.',
                imagePath: './assets/images/music-notation/repetition-tremolo.svg',
                imageHeight: 50,
                imageMargins: -5
            },
            {
                name: 'Repeat signs',
                description: 'The enclosed passage should be played more than once. If the left repeat sign is missing, then it is repeated from the beginning or nearest double bar',
                imagePath: './assets/images/music-notation/repetition-repeat.svg',
                imageHeight: 52,
                imageMargins: -5
            },
            {
                name: 'Simile marks',
                description: 'The preceding measure (or two measures) should be repeated.',
                imagePath: './assets/images/music-notation/repetition-simile.svg',
                imageHeight: 40,
                imageMargins: 0
            },
            {
                name: 'Volta brackets',
                description: 'The repeated passage is to be played with different endings fon different playings.',
                imagePath: './assets/images/music-notation/repetition-volte.svg',
                imageHeight: 40,
                imageMargins: 0
            },
            {
                name: 'Da capo',
                description: 'Repeat music from the beginning. Usually followed by al fine, which means the piece is repeated up to the word fine, or al coda, which means the piece should be reepated up to the coda sign and then jump to the coda.',
                imagePath: './assets/images/music-notation/repetition-dacapo.svg',
                imageHeight: 40,
                imageMargins: 0
            },
            {
                name: 'Dal segno',
                description: 'Repeat music, starting at the nearest segno. Like, the da capo, usually followed by al fine or al coda',
                imagePath: './assets/images/music-notation/repetition-dalsegno.svg',
                imageHeight: 40,
                imageMargins: 0
            },
            {
                name: 'Segno',
                description: 'Mark used for dal segno.',
                imagePath: './assets/images/music-notation/repetition-segno.svg',
                imageHeight: 20,
                imageMargins: 0
            },
            {
                name: 'Coda',
                description: 'ndicates a forward jump to the ending passage of the music. Only used in conjunction with al coda.',
                imagePath: './assets/images/music-notation/repetition-coda.svg',
                imageHeight: 20,
                imageMargins: 0
            },
          ]
        },
        'bowed-instruments': {
          name: 'Bowed Instruments',
          definitions: [
            {
                name: 'Left-hand pizzicato',
                description: 'Note on the stringed instrument is plucked with the left hand.',
                imagePath: './assets/images/music-notation/bowed-pizzicato.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Snap pizzicato / Bartók pizzicato',
                description: 'Note on the stringed instrument is played by pulling string away from frame and letting it go, creating a snap.',
                imagePath: './assets/images/music-notation/bowed-snappizzicato.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Natural harmonic',
                description: 'Note should be played as a natural harmonic.',
                imagePath: './assets/images/music-notation/bowed-harmonic.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Up bow / Sull\'arco',
                description: 'Note is plated drawing the bow upward.',
                imagePath: './assets/images/music-notation/bowed-upbow.svg',
                imageHeight: 80,
                imageMargins: -20
            },
            {
                name: 'Down bow / Giu arco',
                description: 'Note is plated drawing the bow downward.',
                imagePath: './assets/images/music-notation/bowed-downbow.svg',
                imageHeight: 80,
                imageMargins: -20
            },
          ]
        },
        'piano': {
          name: 'Piano',
          definitions: [
            {
                name: 'Engage pedal',
                description: 'The sustain pedal should be pressed.',
                imagePath: './assets/images/music-notation/piano-pedal.svg',
                imageHeight: 20,
                imageMargins: 0
            },
            {
                name: 'Release pedal',
                description: 'The sustain pedal should be released.',
                imagePath: './assets/images/music-notation/piano-pedalup.svg',
                imageHeight: 20,
                imageMargins: 0
            },
            {
                name: 'Variable pedal mark',
                description: 'Indicates when the sustain pedal should be pressed.',
                imagePath: './assets/images/music-notation/piano-pedal2.svg',
                imageHeight: 40,
                imageMargins: 0
            },
          ]
        },
    }
}