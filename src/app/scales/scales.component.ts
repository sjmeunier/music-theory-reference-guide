import { Component, OnInit } from '@angular/core';
import { MusicDefinitions } from '../data/music.definitions';
import { Note } from '../data/note.interface';

declare var Vex: any;

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.css']
})
export class ScalesComponent implements OnInit {

  constructor() { }
  public scaleRoot: string;
  public scaleType: string;

  private musicRenderer: any; 
  private contextGroup: any = null;
  private noteIds: string[];
  private vexFlowNotes: any[];

  private noteDuration: number = 0.4;
  private noteInterval: number = 0;

  private audioContext: any;

  public rootNoteList = [
    { key: 'c', value: 'C' },
    { key: 'c#', value: 'C#/Db' },
    { key: 'd', value: 'D' },
    { key: 'd#', value: 'D#/Eb' },
    { key: 'e', value: 'E' },
    { key: 'f', value: 'F' },
    { key: 'f#', value: 'F#' },
    { key: 'g', value: 'G' },
    { key: 'g#', value: 'G#' },
    { key: 'a', value: 'A' },
    { key: 'a#', value: 'A#' },
    { key: 'b', value: 'B' }
  ];

  public scaleList = [
    { key: 'major', value: 'Major' },
    { key: 'aeolian', value: 'Natural Minor (Aeolian)' },
    { key: 'harmonicminor', value: 'Harmonic Minor' },
    { key: 'melodicminor', value: 'Melodic Minor' },
    { key: 'ionian', value: 'Ionian' },
    { key: 'dorian', value: 'Dorian' },
    { key: 'phyrgian', value: 'Phrygian' },
    { key: 'Lydian', value: 'Lydian' },
    { key: 'Mixolydian', value: 'Mixolydian' },
    { key: 'Locrian', value: 'Locrian' },
    { key: 'Pentatonic', value: 'Pentatonic' }
  ];

  ngOnInit(): void {

    var div = document.getElementById("scaleMusic")

    this.musicRenderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
    this.scaleRoot = "c";
    this.scaleType = "major";
    this.prepareScale();
    this.renderScale();
  }

  public prepareScale() {
    this.noteIds = MusicDefinitions.scales[this.scaleType];
		if (this.noteIds == null) {
      this.noteIds = [];
    }

		this.vexFlowNotes = [];
		for(var i = 0; i < this.noteIds.length; i++) {
			var noteId = this.noteIds[i];
			var vexFlowNote = new Vex.Flow.StaveNote({clef: "treble", keys: [noteId], duration: "w" });
									//.addModifier(0, new Vex.Flow.Annotation(noteTable[noteId].name)
									//	.setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM));
										
			if (MusicDefinitions.notes[noteId].name.includes("b")) {
				vexFlowNote = vexFlowNote.addAccidental(0, new Vex.Flow.Accidental("b"));
			} else if (MusicDefinitions.notes[noteId].name.includes("#")) {
				vexFlowNote = vexFlowNote.addAccidental(0, new Vex.Flow.Accidental("#"));
			}
			this.vexFlowNotes.push(vexFlowNote);
    }

    this.musicRenderer.resize(300, 120);
  }
  public renderScale() {

    var context = this.musicRenderer.getContext();

    //Delete any existing notes on redraw
    if (this.contextGroup != null) {
      context.svg.removeChild(this.contextGroup);
    }

    this.contextGroup = context.openGroup();

		var stave = new Vex.Flow.Stave(10, 0, 280);
		stave.addClef("treble");
		stave.setContext(context).draw();

    if (this.vexFlowNotes.length > 0) {
      var voice = new Vex.Flow.Voice({num_beats: 8,  beat_value: 1});
      voice.addTickables(this.vexFlowNotes);

      var formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 250);
      voice.draw(context, stave);
    }
    
    context.closeGroup();
  }

  public play() {
		this.audioContext = new (window['AudioContext'] || window['webkitAudioContext'])();
		for(var i = 0; i < this.noteIds.length; i++) {
			this.playNote(MusicDefinitions.notes[this.noteIds[i]], i);
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

  public selectRoot(scaleRoot: string) {
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


