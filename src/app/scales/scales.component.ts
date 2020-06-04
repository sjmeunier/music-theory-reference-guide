import { Component, OnInit } from '@angular/core';
import { MusicDefinitions } from '../data/music-definitions';
import { UILists } from '../data/ui-lists';
import { Scale } from '../data/scale.interface';
import { MusicLib } from '../data/music-lib';
import { PianoSynthPlayer } from '../player/piano-synth-player';
declare var Vex: any;

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.css']
})
export class ScalesComponent implements OnInit {

  constructor() { }

  public rootBaseNoteList = UILists.rootBaseNoteList;
  public rootAccidentalList = UILists.rootAccidentalList;
  public scaleList = UILists.scaleList;
  public clefList = UILists.clefList;
  public keySignatureList = UILists.keySignatureList;

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
    this.generateScale();
  }

  public generateScale() {
    this.selectedScale = MusicDefinitions.scales[this.scaleType];
    this.vexFlowNotes = [];
    for(var i = 0; i < this.selectedScale.intervals.length; i++) {
      var noteName: string = this.selectedScale.scaleNotes[this.scaleRoot].notes[i].name;

      var vexFlowKey: string =  noteName + '/' + (this.scaleOctave +  this.selectedScale.scaleNotes[this.scaleRoot].notes[i].octave);

      var vexFlowNote = new Vex.Flow.StaveNote({clef: this.scaleClef, keys: [vexFlowKey], duration: 'h' })
        .addModifier(0, new Vex.Flow.Annotation(MusicLib.prettifyAccidentals(noteName))
          .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM));

      if ((this.showKeySignature === false  || this.selectedScale.scaleNotes[this.scaleRoot].keySignature.length == 0) && noteName.length > 1) {
        vexFlowNote = vexFlowNote.addAccidental(0, new Vex.Flow.Accidental(noteName.substring(1)));
      }
      this.vexFlowNotes.push(vexFlowNote);
    }

    var noteIds: number[][] = [];
    for(var i = 0; i < this.selectedScale.intervals.length; i++) {
      noteIds.push([this.noteId + this.selectedScale.intervals[i]]);
    }
    this.player = new PianoSynthPlayer(noteIds, this.noteDuration, this.setActiveNoteStyleCallback, this.setStandardNoteStyleCallback, this);

    this.musicRenderer.resize(550, 120);
    this.renderScale();
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