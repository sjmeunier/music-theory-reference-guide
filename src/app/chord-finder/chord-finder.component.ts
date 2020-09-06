import { Component, OnInit } from '@angular/core';
import { UILists } from '../data/ui-lists';
import { detect } from '@tonaljs/chord-detect';

@Component({
  selector: 'app-chord-finder',
  templateUrl: './chord-finder.component.html',
  styleUrls: ['./chord-finder.component.css']
})
export class ChordFinderComponent implements OnInit {

  constructor() { }

  public noteSelectList = UILists.chromaticNoteList;
  public chordResults: string[] = [];

  ngOnInit(): void {
    this.noteSelectList.splice(0,0, { key: '', value: '--' });
    this.chordResults.push("No notes selected");
  }


  public checkNotes() {
    let notes: string[] = [];

    for(let i = 1; i < 7; i ++) {
      let element = (<HTMLSelectElement>document.getElementById('note' + i));
      let value = element.value;
      if (value !== '') {
        notes.push(value);
      }
    }

    this.chordResults = [];
    if (notes.length < 2) {
      this.chordResults.push("Too few notes selected");
    } else {
      this.chordResults = detect(notes);
    }

    if (this.chordResults.length == 0) {
      this.chordResults.push("No chord match found");
    }
  }
}
