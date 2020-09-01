import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminology',
  templateUrl: './terminology.component.html',
  styleUrls: ['./terminology.component.css']
})
export class TerminologyComponent implements OnInit {

  constructor() { }

  public tempoTerms = [
    { term: 'Grave', definition: 'Slow and serious' },
    { term: 'Largo', definition: 'Slow and with great dignity' },
    { term: 'Lento', definition: 'Slowly' },
    { term: 'Adagio', definition: 'Slow' },
    { term: 'Larghetto', definition: 'Moderately slow' },
    { term: 'Andante', definition: 'Rather slow' },
    { term: 'Andantino', definition: 'Slightly quicker then Andante' },
    { term: 'Moderato', definition: 'Moderate tempo' },
    { term: 'Allegretto', definition: 'Moderately quick' },
    { term: 'Allegro', definition: 'Quickly, in a brisk lively manner' },
    { term: 'Vivo', definition: 'With vigor' },
    { term: 'Vivace', definition: 'In a quick lively manner' },
    { term: 'Presto', definition: 'Very fast' },
    { term: 'Accelerando', definition: 'Gradually accelerating tempo' },
    { term: 'Stringendo', definition: 'Played with an accelerating tempo' },
    { term: 'Allargando', definition: 'Slower and louder' },
    { term: 'Ritardano', definition: 'Gradually slowing down' },
    { term: 'Rallentano', definition: 'Gradually slowing down' },
    { term: 'Rubato', definition: 'Slowing down or speeding up at will' },
    { term: 'A Tempo', definition: 'Retun to original tempo after ritard' },
    { term: 'Tempo I', definition: 'Original tempo' },
    { term: 'Molto', definition: 'Very much' },
    { term: 'Meno', definition: 'Less' },
    { term: 'Piu', definition: 'More' },
    { term: 'Non Troppo', definition: 'Not too much' },
    { term: 'Poco a Poco', definition: 'Little by little' }
  ];

  public dynamicsTerms = [
    { term: 'Pianissimo', definition: 'Very soft' },
    { term: 'Piano', definition: 'Soft' },
    { term: 'Mezzo Piano', definition: 'Moderately soft' },
    { term: 'Mezzo Forte', definition: 'Moderately loud' },
    { term: 'Forte', definition: 'Loud' },
    { term: 'Fortissimo', definition: 'Very loud' },
    { term: 'Diminuendo', definition: 'Gradually getting softer' },
    { term: 'Crescendo', definition: 'Gradually getting louder' },
    { term: 'Sforzando', definition: 'A strongly accented note' },
    { term: 'Subito', definition: 'Suddenly' },
    { term: 'Staccato', definition: 'Played with quick key stroke, and not holding the note to blend with next note' },
    { term: 'Accent', definition: 'Note should be accented' },
    { term: 'Teneto', definition: 'Note should be held for full length' },
    { term: 'Fermata', definition: 'Note should be held longer than the full length' },
  ];

  public cadenceTerms = [
    { term: 'Perfect Authentic', definition: 'V - I (bass note in root position, top note in tonic is root)' },
    { term: 'Imperfect Authentic', definition: 'V (or vii\u00B0) - I' },
    { term: 'Half', definition: 'IV - V' },
    { term: 'Plagal', definition: 'IV - I' },
    { term: 'Deceptive', definition: 'V - any chord other than I (usually vi)' }
  ];
  
  public scaleDegreeTerms = [
    { term: 'Tonic', definition: 'First degree of scale' },
    { term: 'Supertonic', definition: '2nd' },
    { term: 'Mediant', definition: '3rd' },
    { term: 'Subdominant', definition: '4th' },
    { term: 'Dominant', definition: '5th' },
    { term: 'Submediant', definition: '6th' },
    { term: 'Leading Tone', definition: '7th (called subtonic, if 7th is lowered)' }
  ];
  
  public categoryList = [
    { key: 'dynamics', value: 'Dynamics'},
    { key: 'tempo', value: 'Tempo'},
    { key: 'cadences', value: 'Cadences'},
    { key: 'scale-degrees', value: 'Scale Degrees'},
  ]

  public selectedCategory: string;
  public selectedTerms: any[];

  ngOnInit(): void {
    this.selectCategory('dynamics');
  }

  public selectCategory(selectedCategory: string) {
    this.selectedCategory = selectedCategory;

    if (this.selectedCategory == 'dynamics') {
      this.selectedTerms = this.dynamicsTerms;
    } else if (this.selectedCategory == 'tempo') {
      this.selectedTerms = this.tempoTerms;
    } else if (this.selectedCategory == 'cadences') {
      this.selectedTerms = this.cadenceTerms;
    } else if (this.selectedCategory == 'scale-degrees') {
      this.selectedTerms = this.scaleDegreeTerms;
    }
  }
}
