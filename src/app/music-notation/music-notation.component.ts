import { Component, OnInit } from '@angular/core';
import { MusicGroupDefinition } from './music-group-definition.interface';
import { MusicNotationDefinitions } from './music-notation-definitions';

@Component({
  selector: 'app-music-notation',
  templateUrl: './music-notation.component.html',
  styleUrls: ['./music-notation.component.css']
})
export class MusicNotationComponent implements OnInit {

  constructor() { }

  public groupList: any[] = [
    { key: 'lines', value: 'Lines'},
    { key: 'clefs', value: 'Clefs'},
    { key: 'notes', value: 'Notes'},
    { key: 'rests', value: 'Rests'},
    { key: 'accidentals', value: 'Accidentals'},
    { key: 'time-signatures', value: 'Time signatures'},
    { key: 'note-relationships', value: 'Note relationships'},
    { key: 'dynamics', value: 'Dynamics'},
    { key: 'articulations', value: 'Articulations'},
    { key: 'ornaments', value: 'Ornaments'},
    { key: 'repetition', value: 'Repetition and codas'},
    { key: 'bowed-instruments', value: 'Bowed instruments'},
    { key: 'piano', value: 'Piano'},
  ];

  public selectedGroup: string;

  public selectedGroupDefinition: MusicGroupDefinition;


  ngOnInit(): void {
    this.selectedGroup = 'lines';
    this.selectedGroupDefinition = MusicNotationDefinitions.groupDefinitions[this.selectedGroup];
  }

  public selectGroup(group: string) {
    this.selectedGroup = group;
    this.selectedGroupDefinition = MusicNotationDefinitions.groupDefinitions[this.selectedGroup];
  }


}
