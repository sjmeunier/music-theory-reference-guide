import { Component, OnInit } from '@angular/core';
import { ClefDefinition } from './clef-definition.interface';
declare var Vex: any;

@Component({
  selector: 'app-sheet-music',
  templateUrl: './sheet-music.component.html',
  styleUrls: ['./sheet-music.component.css']
})
export class SheetMusicComponent implements OnInit {

  constructor() { }

  private clefList: ClefDefinition[] = [
    { name: 'treble', text: 'Treble', yOffset: 7 },
    { name: 'bass', text: 'Bass', yOffset: 15 },
  ]

  private imageWidth: number = 580;
  private staveWidth: number = 560;
  private imageHeight: number = 100;
  private textY: number = 110;
  ngOnInit(): void {
    this.generateNoteTimes();
    this.generateRestTimes();
    this.generateAccidentals();
  }

  private generateNoteTimes() {
    let div = document.getElementById("notes");
    let musicRenderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
    musicRenderer.resize(this.imageWidth, this.imageHeight);

    let context = musicRenderer.getContext();

    let notes = [];

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['a/4'], duration: 'w' })
      .addModifier(0, new Vex.Flow.Annotation('Whole')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['a/4'], duration: 'h' })
      .addModifier(0, new Vex.Flow.Annotation('Half')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['a/4'], duration: '4' })
      .addModifier(0, new Vex.Flow.Annotation('1/4')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['a/4'], duration: '8' })
      .addModifier(0, new Vex.Flow.Annotation('1/8')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['a/4'], duration: '16' })
      .addModifier(0, new Vex.Flow.Annotation('1/16')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['a/4'], duration: '32' })
      .addModifier(0, new Vex.Flow.Annotation('1/32')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));
 
    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['a/4'], duration: '64' })
      .addModifier(0, new Vex.Flow.Annotation('1/64')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    var stave = new Vex.Flow.Stave(10, 0, this.staveWidth);
    stave.setContext(context).draw();

    var voice = new Vex.Flow.Voice({num_beats: 6,  beat_value: 8});
    voice.setStrict(false);
    voice.addTickables(notes);

    var formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 590);
    voice.draw(context, stave);

  }

  private generateRestTimes() {
    let div = document.getElementById("rests");
    let musicRenderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
    musicRenderer.resize(this.imageWidth, this.imageHeight);

    let context = musicRenderer.getContext();

    let notes = [];

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['c/5'], duration: 'wr' })
      .addModifier(0, new Vex.Flow.Annotation('Whole')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['c/5'], duration: 'hr' })
      .addModifier(0, new Vex.Flow.Annotation('Half')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['c/5'], duration: '4r' })
      .addModifier(0, new Vex.Flow.Annotation('1/4')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['c/5'], duration: '8r' })
      .addModifier(0, new Vex.Flow.Annotation('1/8')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['c/5'], duration: '16r' })
      .addModifier(0, new Vex.Flow.Annotation('1/16')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['c/5'], duration: '32r' })
      .addModifier(0, new Vex.Flow.Annotation('1/32')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));
 
    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['c/5'], duration: '64r' })
      .addModifier(0, new Vex.Flow.Annotation('1/64')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    var stave = new Vex.Flow.Stave(10, 0, this.staveWidth);
    stave.setContext(context).draw();

    var voice = new Vex.Flow.Voice({num_beats: 6,  beat_value: 8});
    voice.setStrict(false);
    voice.addTickables(notes);

    var formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 530);
    voice.draw(context, stave);

  }

  private generateAccidentals() {
    let div = document.getElementById("accidentals");
    let musicRenderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
    musicRenderer.resize(this.imageWidth, this.imageHeight);

    let context = musicRenderer.getContext();

    let notes = [];

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['a/4'], duration: 'h' })
    .addAccidental(0, new Vex.Flow.Accidental("n"))
    .addModifier(0, new Vex.Flow.Annotation('Natural')
    .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['a/4'], duration: 'h' })
      .addAccidental(0, new Vex.Flow.Accidental("#"))
      .addModifier(0, new Vex.Flow.Annotation('Sharp')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['a/4'], duration: 'h' })
      .addAccidental(0, new Vex.Flow.Accidental("##"))
      .addModifier(0, new Vex.Flow.Annotation('Double sharp')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['a/4'], duration: 'h' })
      .addAccidental(0, new Vex.Flow.Accidental("b"))
      .addModifier(0, new Vex.Flow.Annotation('Flat')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    notes.push(new Vex.Flow.StaveNote({clef: 'treble', keys: ['a/4'], duration: 'h' })
      .addAccidental(0, new Vex.Flow.Accidental("bb"))
      .addModifier(0, new Vex.Flow.Annotation('Double flat')
      .setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)));

    var stave = new Vex.Flow.Stave(10, 0, this.staveWidth);
    stave.setContext(context).draw();

    var voice = new Vex.Flow.Voice({num_beats: 6,  beat_value: 8});
    voice.setStrict(false);
    voice.addTickables(notes);

    var formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 590);
    voice.draw(context, stave);

  }

  private generateClefs() {
    let div = document.getElementById("clefs");
    let musicRenderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
    musicRenderer.resize(this.imageWidth, this.imageHeight);

    let context = musicRenderer.getContext();

    var stave = new Vex.Flow.Stave(10, 0, this.staveWidth);
    for(var i = 0; i < this.clefList.length; i++) {
      stave.addClef(this.clefList[i].name).addKeySignature("D");
    }
    stave.setContext(context).draw();

    context.font = "30px Arial";

    for(var i = 0; i < this.clefList.length; i++) {
   //   context.fillText(this.clefList[i].text, this.clefList[i].yOffset, this.textY);
    }
    
  }

}
