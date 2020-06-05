import { Component, OnInit } from '@angular/core';
import { UILists } from '../data/ui-lists';
import { Interval } from '../data';
import { PianoSynthPlayer } from '../player/piano-synth-player';
import { MusicLib } from '../data/music-lib';
import { MusicDefinitions } from '../data/music-definitions';
declare var Vex: any;

@Component({
  selector: 'app-intervals',
  templateUrl: './intervals.component.html',
  styleUrls: ['./intervals.component.css']
})
export class IntervalsComponent implements OnInit {

  constructor() { }

  public rootBaseNoteList = UILists.rootBaseNoteList;
  public rootAccidentalList = UILists.rootAccidentalList;
  public intervalsList = UILists.intervalsList;
  public groupingsList = UILists.noteGroupingList;
  public clefList = UILists.clefList;

  public intervalRootBase: string;
  public intervalRootAccidental: string;
  public intervalRoot: string;
  public interval: string;
  public intervalClef: string;
  public intervalOctave: number;
  public grouping: string;

  private selectedInterval: Interval;
  private baseNoteId: number;
  private noteId: number;
  private isFlatInterval: boolean = false;

  private musicRenderer: any; 
  private contextGroup: any = null;
  private vexFlowNotes: any[];

  private player: PianoSynthPlayer;

  private noteDuration: number = 0.5;

  private self: any;

  ngOnInit(): void {
    var div = document.getElementById("scaleMusic")

    this.musicRenderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
    this.intervalClef = 'treble';
    this.grouping = 'single';
    this.intervalRootBase = 'C';
    this.intervalRootAccidental = '';
    this.setIntervalRoot();
    this.interval = 'perfect-octave';
    this.generateInterval();
  }

  public generateInterval() {
    this.selectedInterval = MusicDefinitions.intervals[this.interval];
    let noteIds: number[][] = [];

    if (this.grouping == 'single') {
      this.vexFlowNotes = [];
      for(let i = 0; i < this.selectedInterval.intervals.length; i++) {
        let noteName: string = MusicDefinitions.notes[this.noteId + this.selectedInterval.intervals[i]].name;
        if (noteName.length > 2) {
          if (this.isFlatInterval === true) {
            noteName = noteName.substring(noteName.indexOf('/') + 1);
          } else {
            noteName = noteName.substring(0, 2);
          }
        }
        let vexFlowKey:string = noteName + '/' + MusicDefinitions.notes[this.noteId + this.selectedInterval.intervals[i]].octave;

        let vexFlowNote = new Vex.Flow.StaveNote({clef: this.intervalClef, keys: [vexFlowKey], duration: 'h' })
        .addModifier(0, new Vex.Flow.Annotation(MusicLib.prettifyAccidentals(noteName))
          .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM));

          if (noteName.includes('b')) {
            vexFlowNote = vexFlowNote.addAccidental(0, new Vex.Flow.Accidental('b'));
          } else if (noteName.includes('#')) {
            vexFlowNote = vexFlowNote.addAccidental(0, new Vex.Flow.Accidental('#'));
          }
          this.vexFlowNotes.push(vexFlowNote);
      }

      for(var i = 0; i < this.selectedInterval.intervals.length; i++) {
        noteIds.push([this.noteId + this.selectedInterval.intervals[i]]);
      }
    } else {
      let chordKeys: string[] = [];
      let noteNames: string[] = [];
      for(var i = 0; i < this.selectedInterval.intervals.length; i++) {
        var noteName: string = MusicDefinitions.notes[this.noteId + this.selectedInterval.intervals[i]].name;
        if (noteName.length > 2) {
          if (this.isFlatInterval === true) {
            noteName = noteName.substring(noteName.indexOf('/') + 1);
          } else {
            noteName = noteName.substring(0, 2);
          }
        }
        noteNames.push(noteName);
        chordKeys.push(noteName + '/' + MusicDefinitions.notes[this.noteId + this.selectedInterval.intervals[i]].octave);
      }
      var vexFlowNote = new Vex.Flow.StaveNote({clef: this.intervalClef, keys: chordKeys, duration: 'h' })
        .addModifier(0, new Vex.Flow.Annotation(MusicLib.prettifyAccidentals(noteNames[0]  + '-' + noteNames[1]))
          .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM));

      for(var i = 0; i < chordKeys.length; i++) {
        if (chordKeys[i].includes('b')) {
          vexFlowNote = vexFlowNote.addAccidental(i, new Vex.Flow.Accidental('b'));
        } else if (chordKeys[i].includes('#')) {
          vexFlowNote = vexFlowNote.addAccidental(i, new Vex.Flow.Accidental('#'));
        }
      }

      this.vexFlowNotes = [vexFlowNote];

      var chordNoteIds: number[] = [];
      for(var i = 0; i < this.selectedInterval.intervals.length; i++) {
        chordNoteIds.push(this.noteId + this.selectedInterval.intervals[i]);
      }
      noteIds.push(chordNoteIds);
    }
    this.player = new PianoSynthPlayer(noteIds, this.noteDuration, this.setActiveNoteStyleCallback, this.setStandardNoteStyleCallback, this);

    this.musicRenderer.resize(150, 120);
    this.renderInterval();
  }
  public renderInterval() {

    var context = this.musicRenderer.getContext();

    //Delete any existing notes on redraw
    if (this.contextGroup != null) {
      context.svg.removeChild(this.contextGroup);
    }

    this.contextGroup = context.openGroup();

    var stave = new Vex.Flow.Stave(10, 0, 130);
    stave.addClef(this.intervalClef);
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
    this.renderInterval();
  }

  private setIntervalRoot()
  {
    this.intervalRoot = this.intervalRootBase + this.intervalRootAccidental;
    this.baseNoteId = MusicLib.getBaseNoteIdFromSymbol(this.intervalRoot);

    if (this.intervalRootAccidental == 'b') {
      this.isFlatInterval = true;
    } else {
      this.isFlatInterval = false;
    }
    this.intervalOctave = MusicDefinitions.clefs[this.intervalClef].baseOctave;
    //Adjust base note so that notes on clef display nicely irrespective of key
    if (this.baseNoteId < MusicDefinitions.clefs[this.intervalClef].baseNote) {
      this.intervalOctave = this.intervalOctave + 1;
    }

    this.noteId = this.baseNoteId + (this.intervalOctave * 12);
  }


  public selectRootBase(intervalRootBase: string) {
    this.intervalRootBase = intervalRootBase;
    this.setIntervalRoot();
    this.generateInterval();
  }

  public selectRootAccidental(intervalRootAccidental: string) {
    this.intervalRootAccidental = intervalRootAccidental;
    this.setIntervalRoot();
    this.generateInterval();
  }

  public selectClef(intervalClef: string) {
    this.intervalClef = intervalClef;
    this.setIntervalRoot();
    this.generateInterval();
  }

  public selectInterval(interval: string) {
    this.interval = interval;
    this.generateInterval();
  }

  public selectGrouping(grouping: string) {
    this.grouping = grouping;
    this.generateInterval();
  }

}