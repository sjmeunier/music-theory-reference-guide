import { MusicDefinitions } from '../data/music-definitions';

declare var Synth: any;
declare var AudioSynth: any;

export class PianoSynthPlayer {
    private noteStartCallback: any;
    private noteEndCallback: any;
    private noteIds: number[][];
    private noteDuration: number;
    private synth: any;

    private callingContext: any;
    private loaded: boolean = false;

    constructor(noteIds: number[][], noteDuration: number, noteStartCallback: any, noteEndCallback: any, callingContext: any) {
        this.noteIds = noteIds;
        this.noteStartCallback = noteStartCallback;
        this.noteEndCallback = noteEndCallback;
        this.noteDuration = noteDuration;
        this.callingContext = callingContext;

        this.synth = new AudioSynth();
    }

    public play() {
        this.playNote(0);
    }

    private playNote(index: number) {
        var self = this;

        if (index > 0) {
            if (this.noteEndCallback != null) {
                this.noteEndCallback(index - 1, this.callingContext);
            }
        }

        if (index < this.noteIds.length) {
            for(let i = 0; i < this.noteIds[index].length; i++) {
                var note = MusicDefinitions.notes[this.noteIds[index][i]];
                var noteName = note.name;
                if (noteName.length > 2) {
                    noteName = noteName.substring(0, 2);
                }

                if (this.noteStartCallback != null) {
                    this.noteStartCallback(index, this.callingContext);
                }
                this.synth.play(0, noteName, note.octave, 2);
            }
            setTimeout(() => {
                self.playNote(index + 1);
            }, this.noteDuration * 1000);
        }
	}
}