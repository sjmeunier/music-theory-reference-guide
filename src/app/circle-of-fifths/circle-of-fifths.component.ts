import { Component, OnInit } from '@angular/core';
import { MusicLib } from '../data/music-lib';
declare var Vex: any;

@Component({
  selector: 'app-circle-of-fifths',
  templateUrl: './circle-of-fifths.component.html',
  styleUrls: ['./circle-of-fifths.component.css']
})
export class CircleOfFifthsComponent implements OnInit {

  constructor() { }

  private musicRenderer: any; 

  ngOnInit(): void {
    let segmentAngle: number = 2 * Math.PI / 12;
    let majorText:string[] = [ 'C', 'G', 'D', 'A', 'E', 'B', 'Gb/F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'];
    let minorText:string[] = [ 'a', 'e', 'b', 'f#', 'c#', 'g#', 'eb/d#', 'bb', 'f', 'c', 'g', 'd'];
    let outerRadius: number = 415;
    let innerRadius: number = 100;
    let centreX: number = 416;
    let centreY: number = 416;
    let majorTextRadius: number = 340;
    let minorTextRadius: number = 150;

    var canvas = document.getElementById("diagram") as HTMLCanvasElement;
    this.musicRenderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);
    var musicContext = this.musicRenderer.getContext();
    musicContext.scale(0.6, 0.6);

    let staveRadius: number = 250;
    let staveXOffset: number = 50;
    let staveYOffset: number = 60;

    for(let i = 0; i < 12; i++) {
      if (majorText[i] != 'Gb/F#') {
        let staveAngle = (segmentAngle * i) - ((6 * segmentAngle) / 2);
        let staveX: number = (centreX - staveXOffset + staveRadius * Math.cos(staveAngle));
        let staveY: number = (centreY - staveYOffset + staveRadius * Math.sin(staveAngle));

        var stave = new Vex.Flow.Stave(staveX, staveY, 100);
        stave.addClef('treble').addKeySignature(majorText[i]);
        stave.setContext(musicContext).draw();
      }
    }

    let staveAngle = Math.PI / 2;
    let staveX: number = (centreX - staveXOffset + (staveRadius - 20) * Math.cos(staveAngle));
    let staveY: number = (centreY - staveYOffset + (staveRadius - 20) * Math.sin(staveAngle));

    var stave = new Vex.Flow.Stave(staveX, staveY, 90);
    stave.addClef('treble').addKeySignature('F#');
    stave.setContext(musicContext).draw();

    staveX = (centreX - staveXOffset + (staveRadius + 45) * Math.cos(staveAngle));
    staveY = (centreY - staveYOffset + (staveRadius + 45) * Math.sin(staveAngle));

    stave = new Vex.Flow.Stave(staveX, staveY, 90);
    stave.addClef('treble').addKeySignature('Gb');
    stave.setContext(musicContext).draw();

    let canvasContext = canvas.getContext('2d');

    canvasContext.beginPath();
    canvasContext.arc(centreX, centreY, outerRadius, 0, 2 * Math.PI);
    canvasContext.moveTo(centreX + innerRadius, centreY);
    canvasContext.arc(centreX, centreY, innerRadius, 0, 2 * Math.PI);

    for(let i = 0; i < 12; i++) {
      let lineAngle = (segmentAngle * i) - ((7 * segmentAngle) / 2);
      let textAngle = (segmentAngle * i) - ((6 * segmentAngle) / 2);
      canvasContext.moveTo(centreX + innerRadius * Math.cos(lineAngle), centreY + innerRadius * Math.sin(lineAngle));
      canvasContext.lineTo(centreX + outerRadius * Math.cos(lineAngle), centreY + outerRadius * Math.sin(lineAngle));

      canvasContext.font = "30px Arial";

      let yOffset = 15;
      let offset = canvasContext.measureText(MusicLib.prettifyAccidentals(majorText[i]));

      let textX: number = (centreX + majorTextRadius * Math.cos(textAngle)) - (offset.width / 2);
      let textY: number = (centreY + yOffset + majorTextRadius * Math.sin(textAngle));
      canvasContext.fillText(MusicLib.prettifyAccidentals(majorText[i]), textX, textY);


      offset = canvasContext.measureText(MusicLib.prettifyAccidentals(minorText[i]));
      textX = (centreX + minorTextRadius * Math.cos(textAngle)) - (offset.width / 2);
      textY = (centreY + yOffset + minorTextRadius * Math.sin(textAngle));
      canvasContext.fillText(MusicLib.prettifyAccidentals(minorText[i]), textX, textY);
    }

    canvasContext.stroke();


  }

}
