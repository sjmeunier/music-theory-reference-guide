import { Component, OnInit } from '@angular/core';
import { InstrumentDefinitions } from '../data/instrument-definitions';
import { InstrumentTuning } from '../data/.';
import { MusicLib } from '../data/music-lib';

@Component({
  selector: 'app-tunings',
  templateUrl: './tunings.component.html',
  styleUrls: ['./tunings.component.css']
})
export class TuningsComponent implements OnInit {

  constructor() { }
  
  public instrumentList = [
    { key: 'violin', value: 'Violin'},
    { key: 'viola', value: 'Viola'},
    { key: 'cello', value: 'Cello'},
    { key: 'double-bass', value: 'Double Bass'},
    { key: 'guitar', value: 'Guitar'},
    { key: 'bass-guitar', value: 'Bass Guitar'},
    { key: 'banjo', value: 'Banjo'},
    { key: 'soprano-ukelele', value: 'Soprano Ukelele'},
    { key: 'concert-ukelele', value: 'Concert Ukelele'},
    { key: 'tenor-ukelele', value: 'Tenor Ukelele'},
    { key: 'baritone-ukelele', value: 'Baritone Ukelele'},
  ];

  public selectedInstrument: string;
  public selectedTunings: InstrumentTuning[];

  ngOnInit(): void {
    this.selectInstrument('violin');
  }

  public selectInstrument(selectedInstrument: string) {
    this.selectedInstrument = selectedInstrument;

    this.selectedTunings = InstrumentDefinitions.instrumentTunings[this.selectedInstrument];
  }

  public prettifyAccidentals(value: string) { 
    value = value.replace(/bb/g, '\uD834\uDD2B');
    value = value.replace(/##/g, '\uD834\uDD2A');
    value = value.replace(/b/g, '\u266D');
    value = value.replace(/#/g, '\u266F');
    return value;
  }
}