import { Component, OnInit } from '@angular/core';
import { InstrumentDefinitions } from '../data/instrument-definitions';
import { InstrumentRange } from '../data/.';

@Component({
  selector: 'app-instrument-ranges',
  templateUrl: './instrument-ranges.component.html',
  styleUrls: ['./instrument-ranges.component.css']
})
export class InstrumentRangesComponent implements OnInit {

  private xOffset: number = 140.5;
  private yOffset: number = 20.5;
  private chartWidth: number = 500;
  private rowHeight: number = 20;
  private colWidth: number = 4;

  public categoryList = [
    { key: 'strings', value: 'Strings'},
    { key: 'woodwind', value: 'Woodwind'},
    { key: 'brass', value: 'Brass'},
    { key: 'percussion', value: 'Percussion'},
    { key: 'folk', value: 'Folk'},
    { key: 'vocal', value: 'Vocal'},
    { key: 'all', value: 'All'},
  ]

  private selectedInstruments: InstrumentRange[];

  public selectedCategory: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedCategory = 'strings';
    this.setSelectedInstruments();
    this.drawChart();
  }

  public selectCategory(selectedCategory: string) {
    this.selectedCategory = selectedCategory;
    this.setSelectedInstruments();
    this.drawChart();
  }

  private setSelectedInstruments() {
    if (this.selectedCategory === 'all') {
      this.selectedInstruments = InstrumentDefinitions.instrumentRanges['strings'].concat(
        InstrumentDefinitions.instrumentRanges['woodwind'],
        InstrumentDefinitions.instrumentRanges['brass'],
        InstrumentDefinitions.instrumentRanges['percussion'],
        InstrumentDefinitions.instrumentRanges['folk'],
        InstrumentDefinitions.instrumentRanges['vocal']
      );
    } else {
      this.selectedInstruments = InstrumentDefinitions.instrumentRanges[this.selectedCategory];
    }
  }

  private drawChart() {
    let canvas = document.getElementById('instrumentRangeCanvas') as HTMLCanvasElement;
    let context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.lineCap = 'round';
    context.lineWidth = 1;

    let chartHeight = (this.rowHeight * this.selectedInstruments.length) + 4;

    canvas.height = chartHeight + this.yOffset + 10;

    //Draw grid lines
    let currentXOffset = this.xOffset;
    context.beginPath();
    context.strokeStyle = '#ccc';
    
    for(let i = 0; i < 108; i++) {
      context.moveTo(currentXOffset, this.yOffset);
      context.lineTo(currentXOffset, this.yOffset + chartHeight);

      currentXOffset += this.colWidth;
    }
    context.closePath();
    context.stroke();

    currentXOffset = this.xOffset;
    context.fillStyle = '#bbb';
    for(let i = 0; i < 108; i++) {
      if (i % 12 == 1 || i% 12 == 3 || i% 12 == 6 || i% 12 == 8 || i% 12 == 10) {
        context.fillRect(currentXOffset + 0.5, this.yOffset, this.colWidth - 1, chartHeight);
      }

      currentXOffset += this.colWidth;
    }

    currentXOffset = this.xOffset;
    context.beginPath();
    context.strokeStyle = '#999';
    
    for(let i = 0; i < 109; i += 12) {
      context.moveTo(currentXOffset, this.yOffset);
      context.lineTo(currentXOffset, this.yOffset + chartHeight);

      currentXOffset += (this.colWidth * 12);
    }
    context.closePath();
    context.stroke();

    context.beginPath();
    context.strokeStyle = '#000';
    context.moveTo(this.xOffset, this.yOffset);
    context.lineTo(this.xOffset + this.colWidth * 108, this.yOffset);
    context.moveTo(this.xOffset, this.yOffset);
    context.lineTo(this.xOffset, this.yOffset + chartHeight);
    context.moveTo(this.xOffset, this.yOffset + chartHeight);
    context.lineTo(this.xOffset + this.colWidth * 108, this.yOffset + chartHeight);
    context.moveTo(this.xOffset + this.colWidth * 108, this.yOffset);
    context.lineTo(this.xOffset + this.colWidth * 108, this.yOffset + chartHeight);
    context.closePath();
    context.stroke();


    //Draw labels
    context.font = "10px Arial";
    context.fillStyle = 'black';
    currentXOffset = this.xOffset - 6;
    for(let i = 0; i < 10; i++) {
      context.fillText('C' + i, currentXOffset, this.yOffset - 3);

      currentXOffset += (this.colWidth * 12);
    }

    let currentYOffset = this.yOffset + 2;
    for(let i = 0; i < this.selectedInstruments.length; i++) {
      context.fillStyle = '#33339988';
      context.strokeStyle = '#000066';
      let startX:number = this.xOffset + (this.getNoteNumber(this.selectedInstruments[i].rangeStart) * this.colWidth) + 0.5;
      let endX:number = this.xOffset + (this.getNoteNumber(this.selectedInstruments[i].rangeEnd) * this.colWidth) - 0.5;
      
      context.fillRect(startX, currentYOffset + 0.5, endX - startX, this.rowHeight - 2);

      context.fillStyle = 'black';
      context.fillText(this.selectedInstruments[i].name, this.xOffset - 130, currentYOffset + this.rowHeight - 7);

      context.fillStyle = '#fafafa';
      context.fillText(this.selectedInstruments[i].rangeStart, startX + 2, currentYOffset + this.rowHeight - 7);

      let rightTextMeasure = context.measureText(this.selectedInstruments[i].rangeEnd);
      context.fillText(this.selectedInstruments[i].rangeEnd, endX - rightTextMeasure.width - 2, currentYOffset + this.rowHeight - 7);
      
      currentYOffset += this.rowHeight;
    }
  }

  private getNoteNumber(note: string)
  {
    let octave = parseInt(note[note.length - 1]);
    note = note.substring(0, note.length - 1).toLowerCase();
    
    let noteValue = 0;
    if (note == 'c') {
      noteValue = 0;
    } else if (note == 'c#' || note == 'db') {
      noteValue = 1;
    } else if (note == 'd') {
      noteValue = 2;
    } else if (note == 'd#' || note == 'eb') {
      noteValue = 3;
    } else if (note == 'e') {
      noteValue = 4;
    } else if (note == 'f') {
      noteValue = 5;
    } else if (note == 'f#' || note == 'gb') {
      noteValue = 6;
    } else if (note == 'g') {
      noteValue = 7;
    } else if (note == 'g#' || note == 'ab') {
      noteValue = 8;
    } else if (note == 'a') {
      noteValue = 9;
    } else if (note == 'a#' || note == 'bb') {
      noteValue = 10;
    } else if (note == 'b') {
      noteValue = 11;
    }
    return (octave * 12) + noteValue;
  }
}
