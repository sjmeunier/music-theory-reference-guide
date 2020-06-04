import { Component, OnInit } from '@angular/core';
import { UILists } from '../data/ui-lists';
import { Scale } from '../data';
import { PianoSynthPlayer } from '../player/piano-synth-player';
import { MusicDefinitions } from '../data/music-definitions';
import { MusicLib } from '../data/music-lib';
declare var Vex: any;

@Component({
  selector: 'app-scale-chords',
  templateUrl: './scale-chords.component.html',
  styleUrls: ['./scale-chords.component.css']
})
export class ScaleChordsComponent implements OnInit {

  constructor() { }

  public rootBaseNoteList = UILists.rootBaseNoteList;
  public rootAccidentalList = UILists.rootAccidentalList;
  public scaleList = UILists.chordScaleList;
  public clefList = UILists.clefList;
  public keySignatureList = UILists.keySignatureList;

  public scaleRootBase: string;
  public scaleRootAccidental: string;
  public scaleRoot: string;
  public scaleType: string;
  public scaleClef: string;
  public scaleOctave: number;
  public chordGroupType: string;

  public showKeySignature: boolean;

  private selectedScale: Scale;
  private baseNoteId: number;
  private noteId: number;
  
  private musicRenderer: any; 
  private contextGroup: any = null;
  private vexFlowNotes: any[];

  private player: PianoSynthPlayer;

  private noteDuration: number = 0.5;

  private self: any;

  ngOnInit(): void {
    var div = document.getElementById("scaleMusic")

    this.musicRenderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
    this.scaleClef = 'treble';
    this.scaleRootBase = 'C';
    this.showKeySignature = true;
    this.scaleRootAccidental = '';
    this.setScaleRoot();
    this.scaleType = 'major';
    this.chordGroupType = 'triads';
    this.generateScale();
  }

  public generateScale() {
    this.selectedScale = MusicDefinitions.scales[this.scaleType];
    this.vexFlowNotes = [];

    let noteIds: number[][] = [];

    for(let i = 0; i < this.selectedScale.intervals.length - 1; i++) {
      let rootNoteName: string = this.selectedScale.scaleNotes[this.scaleRoot].notes[i].name;
      let chordNoteNames: string[] = [];

      let chordType = this.selectedScale.chords[this.chordGroupType][i];

      let chordDefinition = MusicDefinitions.chords[chordType];

      let vexFlowKeys: string[] = [];

      for(let j = 0; j < chordDefinition.heptatonicNoteIndex.length; j++) {
        let adjustedIndex:number = i + chordDefinition.heptatonicNoteIndex[j];
        let noteName:string = this.selectedScale.scaleNotes[this.scaleRoot].notes[adjustedIndex % this.selectedScale.intervals.length].name;
        let vexFlowKey: string =  noteName + '/' + (this.scaleOctave + this.selectedScale.scaleNotes[this.scaleRoot].notes[adjustedIndex % this.selectedScale.intervals.length].octave + Math.floor(adjustedIndex / this.selectedScale.intervals.length));
        vexFlowKeys.push(vexFlowKey);

        chordNoteNames.push(noteName);
      }

      let chordNoteIds: number[] = [];
      for(let j = 0; j < chordDefinition.intervals.length; j++)  {
        chordNoteIds.push(this.noteId + this.selectedScale.intervals[i] + chordDefinition.intervals[j]);
      }
      noteIds.push(chordNoteIds);

      let vexFlowNote = new Vex.Flow.StaveNote({clef: this.scaleClef, keys: vexFlowKeys, duration: 'h' })
        .addModifier(0, new Vex.Flow.Annotation(MusicLib.prettifyAccidentals(rootNoteName + chordDefinition.symbol))
          .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM));

      if ((this.showKeySignature === false  || this.selectedScale.scaleNotes[this.scaleRoot].keySignature.length == 0)) {
        for (let j = 0; j < chordNoteNames.length; j++) {
          if (chordNoteNames[j].length > 1) {
            vexFlowNote = vexFlowNote.addAccidental(j, new Vex.Flow.Accidental(chordNoteNames[j].substring(1)));
          }
        }
      }
      this.vexFlowNotes.push(vexFlowNote);
    }

    for(let i = 0; i < this.selectedScale.intervals.length; i++) {
      
    }
    this.player = new PianoSynthPlayer(noteIds, this.noteDuration, this.setActiveNoteStyleCallback, this.setStandardNoteStyleCallback, this);

    this.musicRenderer.resize(550, 120);
    this.renderScale();
  }
  public renderScale() {

    let context = this.musicRenderer.getContext();

    //Delete any existing notes on redraw
    if (this.contextGroup != null) {
      context.svg.removeChild(this.contextGroup);
    }

    this.contextGroup = context.openGroup();

    let stave = new Vex.Flow.Stave(10, 0, 530);
    stave.addClef(this.scaleClef);
    if (this.showKeySignature === true && this.selectedScale.scaleNotes[this.scaleRoot].keySignature.length > 0) {
      stave.addKeySignature(this.selectedScale.scaleNotes[this.scaleRoot].keySignature);
    }
    stave.setContext(context).draw();

    if (this.vexFlowNotes.length > 0) {
      let voice = new Vex.Flow.Voice({num_beats: this.vexFlowNotes.length,  beat_value: 2});
      voice.addTickables(this.vexFlowNotes);

      let formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 450);
      voice.draw(context, stave);
    }
    
    context.closeGroup();
  }

  public play() {
    this.player.play();
  }

  //The calling context in these callback functions is a bit of hack to regain the local context (this)
  //Otherwise the method gets executed in the context of whichever class is calling the function
  private setActiveNoteStyleCallback = function(vexFlowNoteIndex: number, callingContext: any) {
    callingContext.setNoteStyle(vexFlowNoteIndex, 'blue');
  }

  private setStandardNoteStyleCallback = function(vexFlowNoteIndex: number, callingContext: any) {
    callingContext.setNoteStyle(vexFlowNoteIndex, 'black');
  }

  private setNoteStyle = function (vexFlowNoteIndex: number, color: string) {
    this.vexFlowNotes[vexFlowNoteIndex].setStyle({fillStyle: color, strokeStyle: color});
    this.renderScale();
  }
  
  private setScaleRoot()
  {
    this.scaleRoot = this.scaleRootBase + this.scaleRootAccidental;
    this.baseNoteId = MusicLib.getBaseNoteIdFromSymbol(this.scaleRoot);

    this.scaleOctave = MusicDefinitions.clefs[this.scaleClef].baseOctave;
    //Adjust base note so that notes on clef display nicely irrespective of key
    if (this.baseNoteId < MusicDefinitions.clefs[this.scaleClef].baseNote) {
      this.scaleOctave = this.scaleOctave + 1;
    }

    this.noteId = this.baseNoteId + (this.scaleOctave * 12);
  }


  public selectRootBase(scaleRootBase: string) {
    this.scaleRootBase = scaleRootBase;
    this.setScaleRoot();
    this.generateScale();
  }

  public selectRootAccidental(scaleRootAccidental: string) {
    this.scaleRootAccidental = scaleRootAccidental;
    this.setScaleRoot();
    this.generateScale();
  }

  public selectClef(scaleClef: string) {
    this.scaleClef = scaleClef;
    this.setScaleRoot();
    this.generateScale();
  }

  public selectScale(scaleType: string) {
    this.scaleType = scaleType;
    this.generateScale();
  }

  public selectKeySignature(showKeySignature: boolean) {
    this.showKeySignature = showKeySignature;
    this.generateScale();
  }
}