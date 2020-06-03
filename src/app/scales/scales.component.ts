import { Component, OnInit } from '@angular/core';
import { MusicDefinitions } from '../data/music.definitions';
import { PlayableNote } from '../data/playable-note.interface';
import { Scale } from '../data/scale.interface';
declare var Vex: any;

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.css']
})
export class ScalesComponent implements OnInit {

  constructor() { }
  public scaleRootBase: string;
  public scaleRootAccidental: string;
  public scaleRoot: string;
  public scaleType: string;
  public scaleClef: string;
  public scaleOctave: number;
  public showKeySignature: boolean;

  private selectedScale: Scale;
  private baseNoteId: number;
  private noteId: number;
  
  private musicRenderer: any; 
  private contextGroup: any = null;
  private vexFlowNotes: any[];

  private noteDuration: number = 0.4;
  private noteInterval: number = 0;

  private audioContext: any;

  public rootBaseNoteList = [
    { key: 'C', value: 'C' },
    { key: 'D', value: 'D' },
    { key: 'E', value: 'E' },
    { key: 'F', value: 'F' },
    { key: 'G', value: 'G' },
    { key: 'A', value: 'A' },
    { key: 'B', value: 'B' }
  ];

  public rootAccidentalList = [
    { key: 'b', value: '\u266D' },
    { key: '', value: '\u266E' },
    { key: '#', value: '\u266F' }
  ];

  public keySignatureList = [
    { key: true, value: 'Yes' },
    { key: false, value: 'No' }
  ];

  public scaleList = [
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

  public clefList = [
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


  ngOnInit(): void {

    var div = document.getElementById("scaleMusic")

    this.musicRenderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
    this.scaleClef = 'treble';
    this.scaleRootBase = 'C';
    this.showKeySignature = true;
    this.scaleRootAccidental = '';
    this.setScaleRoot();
    this.scaleType = 'major';
    this.prepareScale();
    this.renderScale();
  }

  private prettifyNoteName(noteName: string): string {
    noteName = noteName.replace('bb', '\uD834\uDD2B');
    noteName = noteName.replace('##', '\uD834\uDD2A');
    noteName = noteName.replace('b', '\u266D');
    noteName = noteName.replace('#', '\u266F');
    return noteName;
  }
  public prepareScale() {
    this.selectedScale = MusicDefinitions.scales[this.scaleType];
    this.vexFlowNotes = [];
		for(var i = 0; i < this.selectedScale.intervals.length; i++) {
      var noteName: string = this.selectedScale.scaleNotes[this.scaleRoot].notes[i].name;

      var vexFlowKey: string =  noteName + '/' + (this.scaleOctave +  this.selectedScale.scaleNotes[this.scaleRoot].notes[i].octave);

			var vexFlowNote = new Vex.Flow.StaveNote({clef: this.scaleClef, keys: [vexFlowKey], duration: 'h' })
			  .addModifier(0, new Vex.Flow.Annotation(this.prettifyNoteName(noteName))
				  .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM));
              
      if ((this.showKeySignature === false  || this.selectedScale.scaleNotes[this.scaleRoot].keySignature.length == 0) && noteName.length > 1) {
        vexFlowNote = vexFlowNote.addAccidental(0, new Vex.Flow.Accidental(noteName.substring(1)));
      }
			this.vexFlowNotes.push(vexFlowNote);
    }

    this.musicRenderer.resize(550, 120);
  }
  public renderScale() {

    var context = this.musicRenderer.getContext();

    //Delete any existing notes on redraw
    if (this.contextGroup != null) {
      context.svg.removeChild(this.contextGroup);
    }

    this.contextGroup = context.openGroup();

		var stave = new Vex.Flow.Stave(10, 0, 530);
    stave.addClef(this.scaleClef);
    if (this.showKeySignature === true && this.selectedScale.scaleNotes[this.scaleRoot].keySignature.length > 0) {
      stave.addKeySignature(this.selectedScale.scaleNotes[this.scaleRoot].keySignature);
    }
		stave.setContext(context).draw();

    if (this.vexFlowNotes.length > 0) {
      var voice = new Vex.Flow.Voice({num_beats: this.vexFlowNotes.length,  beat_value: 2});
      voice.addTickables(this.vexFlowNotes);

      var formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 450);
      voice.draw(context, stave);
    }
    
    context.closeGroup();
  }

  public play() {
		this.audioContext = new (window['AudioContext'] || window['webkitAudioContext'])();
		for(var i = 0; i < this.selectedScale.intervals.length; i++) {
			this.playNote(MusicDefinitions.notes[this.noteId + this.selectedScale.intervals[i]], i);
		}
	}
			
	private playNote(note: PlayableNote, index: number) {
		var self = this;
		var startTime = index * (this.noteDuration + this.noteInterval);
		const silentOscillator = this.audioContext.createOscillator();
		silentOscillator.connect(this.audioContext.destination);
		silentOscillator.onended = () => {
			self.setNoteStyle(index, "blue");
		};
		silentOscillator.start(startTime);
		silentOscillator.stop(startTime);

		var oscillator = this.audioContext.createOscillator();
		oscillator.type = "sine";
		oscillator.frequency.value = note.frequency;
		oscillator.onended = () => {
			self.setNoteStyle(index, "black");
		};
		oscillator.start(startTime);
		oscillator.stop(startTime + this.noteDuration);
		oscillator.connect(this.audioContext.destination);
	}
	
	private setNoteStyle = function (vexFlowNoteIndex: number, color: string) {
		this.vexFlowNotes[vexFlowNoteIndex].setStyle({fillStyle: color, strokeStyle: color});
    this.renderScale();
  }
  
  private setScaleRoot()
  {
    this.scaleRoot = this.scaleRootBase + this.scaleRootAccidental;
    switch(this.scaleRoot) {
      case 'C':
      case 'B#':
        this.baseNoteId = 0;
        break;
      case 'C#':
      case 'Db':
        this.baseNoteId = 1;
        break;      
      case 'D':
        this.baseNoteId = 2;
        break;      
      case 'D#':
      case 'Eb':
        this.baseNoteId = 3;
        break;      
      case 'E':
      case 'Fb':
        this.baseNoteId = 4;
        break;      
      case 'E#':
      case 'F':
        this.baseNoteId = 5;
        break;      
      case 'F#':
      case 'Gb':
        this.baseNoteId = 6;
        break;      
      case 'G':
        this.baseNoteId = 7;
        break;      
      case 'G#':
      case 'Ab':
        this.baseNoteId = 8;
        break;      
      case 'A':
        this.baseNoteId = 9;
        break;      
      case 'A#':
      case 'Bb':
        this.baseNoteId = 10;
        break;      
      case 'B':
      case 'Cb':
        this.baseNoteId = 11;
        break;      
    }
    this.noteId = this.baseNoteId;

    this.scaleOctave = MusicDefinitions.clefs[this.scaleClef].baseOctave;
    //Adjust base note so that notes on clef display nicely irrespective of key
    if (this.baseNoteId < MusicDefinitions.clefs[this.scaleClef].baseNote) {
      this.scaleOctave = this.scaleOctave + 1;
    }

    this.noteId = this.noteId + (this.scaleOctave * 12);
  }


  public selectRootBase(scaleRootBase: string) {
    this.scaleRootBase = scaleRootBase;
    this.setScaleRoot();
    this.prepareScale();
    this.renderScale();
  }

  public selectRootAccidental(scaleRootAccidental: string) {
    this.scaleRootAccidental = scaleRootAccidental;
    this.setScaleRoot();
    this.prepareScale();
    this.renderScale();
  }

  public selectClef(scaleClef: string) {
    this.scaleClef = scaleClef;
    this.setScaleRoot();
    this.prepareScale();
    this.renderScale();
  }

  public selectScale(scaleType: string) {
    this.scaleType = scaleType;
    this.prepareScale();
    this.renderScale();
  }

  public selectKeySignature(showKeySignature: boolean) {
    this.showKeySignature = showKeySignature;
    this.prepareScale();
    this.renderScale();
  }
}


