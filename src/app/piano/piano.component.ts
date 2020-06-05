import { Component, OnInit, HostListener } from '@angular/core';
import { PianoKey } from './piano-key.interface';
declare var AudioSynth: any;

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {

  constructor() { }

  public startOctave: number;
  public keyList: PianoKey[];

  public octaveList: any[] = [
    { key: 0, value: '0' },
    { key: 1, value: '1' },
    { key: 2, value: '2' },
    { key: 3, value: '3' },
    { key: 4, value: '4' },
    { key: 5, value: '5' },
    { key: 6, value: '6' },
  ]

  private keyBindings: any[] = [
    { code: 81, value: 'Q'},  //C
    { code: 50, value: '2'},  //C#
    { code: 87, value: 'W'},  //D
    { code: 51, value: '3'},  //D#
    { code: 69, value: 'E'},  //E
    { code: 82, value: 'R'},  //F
    { code: 53, value: '5'},  //F#
    { code: 84, value: 'T'},  //G
    { code: 54, value: '6'},  //G#
    { code: 89, value: 'Y'},  //A
    { code: 55, value: '7'},  //A#
    { code: 85, value: 'U'},  //B
    { code: 73, value: 'I'},  //C
    { code: 57, value: '9'},  //C#
    { code: 79, value: 'O'},  //D
    { code: 48, value: '0'},  //D#
    { code: 80, value: 'P'},  //E
    { code: 219, value: '['},  //F
    { code: 187, value: '+'},  //F#
    { code: 221, value: ']'},  //G
    { code: 65, value: 'A'},  //G#
    { code: 90, value: 'Z'},  //A
    { code: 83, value: 'S'},  //A#
    { code: 88, value: 'X'},  //B
    { code: 67, value: 'C'},  //C
    { code: 70, value: 'F'},  //C#
    { code: 86, value: 'V'},  //D
    { code: 71, value: 'G'},  //D#
    { code: 66, value: 'B'},  //E
    { code: 78, value: 'N'},  //F
    { code: 74, value: 'J'},  //F#
    { code: 77, value: 'M'},  //G
    { code: 75, value: 'K'},  //G#
    { code: 188, value: ','},  //A
    { code: 76, value: 'L'},  //A#
    { code: 190, value: '.'},  //B
  ]

  private activeKeys: { [code: number]: number; };

  private whiteKeyWidth: number = 28;
  private blackKeyOffset: number = -10;

  private synth: any;

  ngOnInit(): void {
    this.synth = new AudioSynth();
    this.startOctave = 3;
    this.setKeys();
  }

  public playNote(noteIndex: number) {
    this.synth.play(0, this.keyList[noteIndex].name + this.keyList[noteIndex].accidental, this.keyList[noteIndex].octave, 2);
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (!(event.keyCode in this.activeKeys)) {
      for(var i = 0; i < this.keyList.length; i++) {
        if (this.keyList[i].keyBinding === event.keyCode) {
          this.activeKeys[event.keyCode] = i;
          this.synth.play(0, this.keyList[i].name + this.keyList[i].accidental, this.keyList[i].octave, 2);

          var pressedKey = document.getElementById("key" + i);
          pressedKey.classList.add('pressed');
          break;
        }
      }
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyUp(event: KeyboardEvent) {
    if (event.keyCode in this.activeKeys) {
      var key = document.getElementById("key" + this.activeKeys[event.keyCode]);
      key.classList.remove('pressed');
      delete(this.activeKeys[event.keyCode]);
    }
  }

  private setKeys() {
    this.keyList = [];
    this.activeKeys = {};

    let octave: number = this.startOctave;
    let currentXOffset = 0;
    let index: number = 0;

    for(var i = 0; i < 3; i++) {
      this.keyList.push({ name: 'C', octave: octave, accidental: '', keyBinding: this.keyBindings[this.keyList.length].code, keyName: this.keyBindings[this.keyList.length].value, left: currentXOffset + "px"});
      currentXOffset += this.whiteKeyWidth;
      this.keyList.push({ name: 'C', octave: octave, accidental: '#', keyBinding: this.keyBindings[this.keyList.length].code, keyName: this.keyBindings[this.keyList.length].value, left: currentXOffset + this.blackKeyOffset + "px"});
      this.keyList.push({ name: 'D', octave: octave, accidental: '', keyBinding: this.keyBindings[this.keyList.length].code, keyName: this.keyBindings[this.keyList.length].value, left: currentXOffset + "px"});
      currentXOffset += this.whiteKeyWidth;
      this.keyList.push({ name: 'D', octave: octave, accidental: '#', keyBinding: this.keyBindings[this.keyList.length].code, keyName: this.keyBindings[this.keyList.length].value, left: currentXOffset + this.blackKeyOffset + "px"});
      this.keyList.push({ name: 'E', octave: octave, accidental: '', keyBinding: this.keyBindings[this.keyList.length].code, keyName: this.keyBindings[this.keyList.length].value, left: currentXOffset + "px"});
      currentXOffset += this.whiteKeyWidth;
      this.keyList.push({ name: 'F', octave: octave, accidental: '', keyBinding: this.keyBindings[this.keyList.length].code, keyName: this.keyBindings[this.keyList.length].value, left: currentXOffset + "px"});
      currentXOffset += this.whiteKeyWidth;
      this.keyList.push({ name: 'F', octave: octave, accidental: '#', keyBinding: this.keyBindings[this.keyList.length].code, keyName: this.keyBindings[this.keyList.length].value, left: currentXOffset + this.blackKeyOffset + "px"});
      this.keyList.push({ name: 'G', octave: octave, accidental: '', keyBinding: this.keyBindings[this.keyList.length].code, keyName: this.keyBindings[this.keyList.length].value, left: currentXOffset + "px"});
      currentXOffset += this.whiteKeyWidth;
      this.keyList.push({ name: 'G', octave: octave, accidental: '#', keyBinding: this.keyBindings[this.keyList.length].code, keyName: this.keyBindings[this.keyList.length].value, left: currentXOffset + this.blackKeyOffset + "px"});
      this.keyList.push({ name: 'A', octave: octave, accidental: '', keyBinding: this.keyBindings[this.keyList.length].code, keyName: this.keyBindings[this.keyList.length].value, left: currentXOffset + "px"});
      currentXOffset += this.whiteKeyWidth;
      this.keyList.push({ name: 'A', octave: octave, accidental: '#', keyBinding: this.keyBindings[this.keyList.length].code, keyName: this.keyBindings[this.keyList.length].value, left: currentXOffset + this.blackKeyOffset + "px"});
      this.keyList.push({ name: 'B', octave: octave, accidental: '', keyBinding: this.keyBindings[this.keyList.length].code, keyName: this.keyBindings[this.keyList.length].value, left: currentXOffset + "px"});
      currentXOffset += this.whiteKeyWidth;

      octave = octave + 1;
    }
  }

  public selectStartOctave(octave:number) {
    this.startOctave = octave;
    this.setKeys();
  }
}
