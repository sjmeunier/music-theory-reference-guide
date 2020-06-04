import { Component, OnInit } from '@angular/core';
import { MusicDefinitions } from '../data/music-definitions';
import { UILists } from '../data/ui-lists';
import { MusicLib } from '../data/music-lib';
import { SynthPlayer } from '../player/synth-player';
import { PianoPlayer } from '../player/piano-player';
import { Chord } from '../data/chord.interface';
declare var Vex: any;

@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.css']
})
export class ChordsComponent implements OnInit {

  constructor() { }

  public rootBaseNoteList = UILists.rootBaseNoteList;
  public rootAccidentalList = UILists.rootAccidentalList;
  public chordTypeList = UILists.chordTypeList;
  public clefList = UILists.clefList;

  public chordRootBase: string;
  public chordRootAccidental: string;
  public chordRoot: string;
  public chordType: string;
  public chordClef: string;
  public chordOctave: number;

  private selectedChord: Chord;
  private baseNoteId: number;
  private noteId: number;
  private isFlatChord: boolean = false;
  
  private musicRenderer: any; 
  private contextGroup: any = null;
  private vexFlowNotes: any[];

  private player: SynthPlayer;

  private noteDuration: number = 1;

  private self: any;

  ngOnInit(): void {
    var div = document.getElementById("scaleMusic")

    this.musicRenderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
    this.chordClef = 'treble';
    this.chordRootBase = 'C';
    this.chordRootAccidental = '';
    this.setChordRoot();
    this.chordType = 'major-triad';
    this.generateChord();
  }

  public generateChord() {
    this.selectedChord = MusicDefinitions.chords[this.chordType];

    var chordKeys: string[] = [];
    for(var i = 0; i < this.selectedChord.intervals.length; i++) {
      var noteName: string = MusicDefinitions.notes[this.noteId + this.selectedChord.intervals[i]].name;
      if (noteName.length > 2) {
        if (this.isFlatChord === true) {
          noteName = noteName.substring(noteName.indexOf('/') + 1);
        } else {
          noteName = noteName.substring(0, 2);
        }
      }
      chordKeys.push(noteName + '/' + MusicDefinitions.notes[this.noteId + this.selectedChord.intervals[i]].octave);
    }
    var vexFlowNote = new Vex.Flow.StaveNote({clef: this.chordClef, keys: chordKeys, duration: 'h' })
      .addModifier(0, new Vex.Flow.Annotation(MusicLib.prettifyAccidentals(this.chordRoot + this.selectedChord.symbol))
        .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM));

    for(var i = 0; i < chordKeys.length; i++) {
      if (chordKeys[i].includes('b')) {
        vexFlowNote = vexFlowNote.addAccidental(i, new Vex.Flow.Accidental('b'));
      } else if (chordKeys[i].includes('#')) {
        vexFlowNote = vexFlowNote.addAccidental(i, new Vex.Flow.Accidental('#'));
      }
    }

    this.vexFlowNotes = [vexFlowNote];

    var noteIds: number[] = [];
    for(var i = 0; i < this.selectedChord.intervals.length; i++) {
			noteIds.push(this.noteId + this.selectedChord.intervals[i]);
		}
    this.player = new SynthPlayer(noteIds, this.noteDuration, true, null, null, this);

    this.musicRenderer.resize(150, 120);
    this.renderChord();
  }
  public renderChord() {

    var context = this.musicRenderer.getContext();

    //Delete any existing notes on redraw
    if (this.contextGroup != null) {
      context.svg.removeChild(this.contextGroup);
    }

    this.contextGroup = context.openGroup();

		var stave = new Vex.Flow.Stave(10, 0, 130);
    stave.addClef(this.chordClef);
		stave.setContext(context).draw();

    if (this.vexFlowNotes.length > 0) {
      var voice = new Vex.Flow.Voice({num_beats: this.vexFlowNotes.length,  beat_value: 2});
      voice.addTickables(this.vexFlowNotes);

      var formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 100);
      voice.draw(context, stave);
    }
    
    context.closeGroup();
  }

  public play() {
    this.player.play();
	}

  private setChordRoot()
  {
    this.chordRoot = this.chordRootBase + this.chordRootAccidental;
    this.baseNoteId = MusicLib.getBaseNoteIdFromSymbol(this.chordRoot);

    if (this.chordRootAccidental == 'b') {
      this.isFlatChord = true;
    } else {
      this.isFlatChord = false;
    }
    this.chordOctave = MusicDefinitions.clefs[this.chordClef].baseOctave;
    //Adjust base note so that notes on clef display nicely irrespective of key
    if (this.baseNoteId < MusicDefinitions.clefs[this.chordClef].baseNote) {
      this.chordOctave = this.chordOctave + 1;
    }

    this.noteId = this.baseNoteId + (this.chordOctave * 12);
  }


  public selectRootBase(chordRootBase: string) {
    this.chordRootBase = chordRootBase;
    this.setChordRoot();
    this.generateChord();
  }

  public selectRootAccidental(chordRootAccidental: string) {
    this.chordRootAccidental = chordRootAccidental;
    this.setChordRoot();
    this.generateChord();
  }

  public selectClef(chordClef: string) {
    this.chordClef = chordClef;
    this.setChordRoot();
    this.generateChord();
  }

  public selectChordType(chordType: string) {
    this.chordType = chordType;
    this.generateChord();
  }

}
