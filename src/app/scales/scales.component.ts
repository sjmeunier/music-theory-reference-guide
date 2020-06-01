import { Component, OnInit } from '@angular/core';
import { MusicDefinitions } from '../data/music.definitions';
import { Note } from '../data/note.interface';
import { Scale } from '../data/scale.interface';

declare var Vex: any;

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.css']
})
export class ScalesComponent implements OnInit {

  constructor() { }
  public scaleRoot: number;
  public scaleType: string;
  public scaleOctave: number;

  private selectedScale: Scale;
  private baseNoteId: number;

  private musicRenderer: any; 
  private contextGroup: any = null;
  private vexFlowNotes: any[];

  private noteDuration: number = 0.4;
  private noteInterval: number = 0;

  private audioContext: any;

  public rootNoteList = [
    { key: 0, value: 'C' },
    { key: 1, value: 'C#/Db' },
    { key: 2, value: 'D' },
    { key: 3, value: 'D#/Eb' },
    { key: 4, value: 'E' },
    { key: 5, value: 'F' },
    { key: 6, value: 'F#/Gb' },
    { key: 7, value: 'G' },
    { key: 8, value: 'G#/Ab' },
    { key: 9, value: 'A' },
    { key: 10, value: 'A#/Bb' },
    { key: 11, value: 'B' }
  ];

  public scaleList = [
    { key: 'major', value: 'Major' },
    { key: 'aeolian', value: 'Natural Minor (Aeolian)' },
    { key: 'harmonicminor', value: 'Harmonic Minor' },
    { key: 'melodicminor', value: 'Melodic Minor' },
    { key: 'dorian', value: 'Dorian' },
    { key: 'phrygian', value: 'Phrygian' },
    { key: 'lydian', value: 'Lydian' },
    { key: 'mixolydian', value: 'Mixolydian' },
    { key: 'locrian', value: 'Locrian' },
    { key: 'pentatonic', value: 'Pentatonic' }
  ];

  ngOnInit(): void {

    var div = document.getElementById("scaleMusic")

    this.musicRenderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
    this.scaleRoot = 0;
    this.scaleOctave = 4;
    this.scaleType = 'major';
    this.prepareScale();
    this.renderScale();
  }

  public prepareScale() {
    this.selectedScale = MusicDefinitions.scales[this.scaleType];

    this.vexFlowNotes = [];
    this.baseNoteId = this.scaleRoot + (this.scaleOctave * 12);
		for(var i = 0; i < this.selectedScale.intervals.length; i++) {
      var noteId = this.baseNoteId + this.selectedScale.intervals[i];

      var noteName: string;
      var vexFlowKey: string;
      if (MusicDefinitions.notes[noteId].name.includes('/')) {
        if (this.selectedScale.isFlatForRootIndex[this.scaleRoot] === true) {
          noteName = MusicDefinitions.notes[noteId].name.substring(3);
        } else {
          noteName = MusicDefinitions.notes[noteId].name.substring(0, 2);
        }
      } else {
        noteName = MusicDefinitions.notes[noteId].name;
      }

      var vexFlowKey: string = noteName + '/' + (noteId / 12);

			var vexFlowNote = new Vex.Flow.StaveNote({clef: 'treble', keys: [vexFlowKey], duration: 'h' })
			  .addModifier(0, new Vex.Flow.Annotation(noteName)
				  .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM));
              
      if (MusicDefinitions.notes[noteId].name.includes('/')) {
        if (this.selectedScale.isFlatForRootIndex[this.scaleRoot] === true) {
          vexFlowNote = vexFlowNote.addAccidental(0, new Vex.Flow.Accidental('b'));
        } else {
          vexFlowNote = vexFlowNote.addAccidental(0, new Vex.Flow.Accidental('#'));
        }
      }
			this.vexFlowNotes.push(vexFlowNote);
    }

    this.musicRenderer.resize(40 + (45 * this.selectedScale.intervals.length), 120);
  }
  public renderScale() {

    var context = this.musicRenderer.getContext();

    //Delete any existing notes on redraw
    if (this.contextGroup != null) {
      context.svg.removeChild(this.contextGroup);
    }

    this.contextGroup = context.openGroup();

		var stave = new Vex.Flow.Stave(10, 0, 20 + (45 * this.selectedScale.intervals.length));
		stave.addClef("treble");
		stave.setContext(context).draw();

    if (this.vexFlowNotes.length > 0) {
      var voice = new Vex.Flow.Voice({num_beats: 4,  beat_value: 1});
      voice.addTickables(this.vexFlowNotes);

      var formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 45 * this.selectedScale.intervals.length);
      voice.draw(context, stave);
    }
    
    context.closeGroup();
  }

  public play() {
		this.audioContext = new (window['AudioContext'] || window['webkitAudioContext'])();
		for(var i = 0; i < this.selectedScale.intervals.length; i++) {
			this.playNote(MusicDefinitions.notes[this.baseNoteId + this.selectedScale.intervals[i]], i);
		}
	}
			
	private playNote(note: Note, index: number) {
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

  public selectRoot(scaleRoot: number) {
    this.scaleRoot = scaleRoot;
    this.prepareScale();
    this.renderScale();
  }

  public selectScale(scaleType: string) {
    this.scaleType = scaleType;
    this.prepareScale();
    this.renderScale();
  }
}


