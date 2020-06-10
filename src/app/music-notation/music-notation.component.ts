import { Component, OnInit } from '@angular/core';
import { MusicGroupDefinition } from './music-group-definition.interface';

@Component({
  selector: 'app-music-notation',
  templateUrl: './music-notation.component.html',
  styleUrls: ['./music-notation.component.css']
})
export class MusicNotationComponent implements OnInit {

  constructor() { }

  public groupList: any[] = [
    { key: 'lines', value: 'Lines'},
    { key: 'clefs', value: 'Clefs'},
    { key: 'notes', value: 'Notes'},
    { key: 'rests', value: 'Rests'},
    { key: 'accidentals', value: 'Accidentals'},
    { key: 'dynamics', value: 'Dynamics'},
    { key: 'articulations', value: 'Articulations'},
  ];

  public selectedGroup: string;

  public selectedGroupDefinition: MusicGroupDefinition;

  public groupDefinitions: { [id: string]: MusicGroupDefinition; } = {
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
      ]
    },
    'notes': {
      name: 'Notes',
      definitions: [
        { name: 'Large / Octuple whole note',
          description: '',
          imagePath: './assets/images/music-notation/notes-octwholenote.svg',
          imageHeight: 40,
          imageMargins: 0
        },
        { name: 'Long / Quadruple whole note',
          description: '',
          imagePath: './assets/images/music-notation/notes-quadwholenote.svg',
          imageHeight: 40,
          imageMargins: 0
        },
        { name: 'Breve / Double whole note',
          description: '',
          imagePath: './assets/images/music-notation/notes-doublewholenote.svg',
          imageHeight: 40,
          imageMargins: 0
        },
        { name: 'Semibreve / Whole note',
          description: '',
          imagePath: './assets/images/music-notation/notes-wholenote.svg',
          imageHeight: 40,
          imageMargins: 0
        },
        { name: 'Minim / Half note',
          description: '',
          imagePath: './assets/images/music-notation/notes-halfnote.svg',
          imageHeight: 40,
          imageMargins: 0
        },
        { name: 'Crotchet / Quarter note',
          description: '',
          imagePath: './assets/images/music-notation/notes-quarternote.svg',
          imageHeight: 80,
          imageMargins: -20
        },
        { name: 'Quaver / Eighth note',
          description: '',
          imagePath: './assets/images/music-notation/notes-eighthnote.svg',
          imageHeight: 80,
          imageMargins: -20
        },
        { name: 'Semiquaver / Sixteenth note',
          description: '',
          imagePath: './assets/images/music-notation/notes-sixteenthnote.svg',
          imageHeight: 80,
          imageMargins: -20
        },
        { name: 'Demisemiquaver / Thirty-second note',
          description: '',
          imagePath: './assets/images/music-notation/notes-thirtysecondnote.svg',
          imageHeight: 80,
          imageMargins: -20
        },
        { name: 'Hemidemisemiquaver / Sixty-fourth note',
          description: '',
          imagePath: './assets/images/music-notation/notes-sixtyfourthnote.svg',
          imageHeight: 54,
          imageMargins: -10
        },
        { name: 'Semihemidemisemiquaver / Hundred twenty-eigth note',
          description: '',
          imagePath: './assets/images/music-notation/notes-hundredtwentyeighthnote.svg',
          imageHeight: 60,
          imageMargins: -10
        },
        { name: 'Demisemihemidemisemiquaver / Two hundred fifty-sixth note',
          description: '',
          imagePath: './assets/images/music-notation/notes-semigarrapatea.svg',
          imageHeight: 80,
          imageMargins: -20
        },
        { name: 'Beamed notes',
          description: 'Connect eigth notes (and shorter) together, often to reflect the rhythmic grouping of the notes',
          imagePath: './assets/images/music-notation/notes-beam.svg',
          imageHeight: 80,
          imageMargins: -10
        },
        { name: 'Dotted note',
          description: 'The note is lengthened by a duration of one-half',
          imagePath: './assets/images/music-notation/notes-dotnote.svg',
          imageHeight: 80,
          imageMargins: -10
        },
        { name: 'Ghost note',
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
        { name: 'Large / Octuple whole rest',
          description: '',
          imagePath: './assets/images/music-notation/rests-octwholerest.svg',
          imageHeight: 80,
          imageMargins: -20
        },
        { name: 'Long / Quadruple whole rest',
          description: '',
          imagePath: './assets/images/music-notation/rests-quadwholerest.svg',
          imageHeight: 40,
          imageMargins: 0
        },
        { name: 'Breve / Double whole rest',
          description: '',
          imagePath: './assets/images/music-notation/rests-doublewholerest.svg',
          imageHeight: 40,
          imageMargins: 0
        },
        { name: 'Semibreve / Whole rest',
          description: '',
          imagePath: './assets/images/music-notation/rests-wholerest.svg',
          imageHeight: 60,
          imageMargins: -10
        },
        { name: 'Minim / Half rest',
          description: '',
          imagePath: './assets/images/music-notation/rests-halfrest.svg',
          imageHeight: 60,
          imageMargins: -10
        },
        { name: 'Crotchet / Quarter rest',
          description: '',
          imagePath: './assets/images/music-notation/rests-quarterrest.svg',
          imageHeight: 40,
          imageMargins: 0
        },
        { name: 'Quaver / Eighth rest',
          description: '',
          imagePath: './assets/images/music-notation/rests-eighthrest.svg',
          imageHeight: 40,
          imageMargins: 0
        },
        { name: 'Semiquaver / Sixteenth rest',
          description: '',
          imagePath: './assets/images/music-notation/rests-sixteenthrest.svg',
          imageHeight: 40,
          imageMargins: 0
        },
        { name: 'Demisemiquaver / Thirty-second rest',
          description: '',
          imagePath: './assets/images/music-notation/rests-thirtysecondrest.svg',
          imageHeight: 40,
          imageMargins: 0
        },
        { name: 'Hemidemisemiquaver / Sixty-fourth rest',
          description: '',
          imagePath: './assets/images/music-notation/rests-sixtyfourthrest.svg',
          imageHeight: 54,
          imageMargins: -10
        },
        { name: 'Semihemidemisemiquaver / Hundred twenty-eigth rest',
          description: '',
          imagePath: './assets/images/music-notation/rests-hundredtwentyeighthrest.svg',
          imageHeight: 80,
          imageMargins: -20
        },
        { name: 'Demisemihemidemisemiquaver / Two hundred fifty-sixth rest',
          description: '',
          imagePath: './assets/images/music-notation/rests-semigarrapatearest.svg',
          imageHeight: 80,
          imageMargins: -20
        },
        { name: 'Multi-measure rest',
          description: 'Indicates the number of measures to rest foe',
          imagePath: './assets/images/music-notation/rests-measurerest.svg',
          imageHeight: 60,
          imageMargins: -10
        },
      ]
    },
    'accidentals': {
      name: 'Accidentals',
      definitions: [
      ]
    },
    'dynamics': {
      name: 'Dynamics',
      definitions: [
      ]
    },
    'articulations': {
      name: 'Articulations',
      definitions: [
      ]
    }
  }


  ngOnInit(): void {
    this.selectedGroup = 'rests';
    this.selectedGroupDefinition = this.groupList[this.selectedGroup];
  }

  public selectGroup(group: string) {
    this.selectedGroup = group;
    this.selectedGroupDefinition = this.groupList[this.selectedGroup];
  }


}
