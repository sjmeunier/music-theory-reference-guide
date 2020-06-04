import { MusicDefinitions } from '../data/music-definitions';

declare var Synth: any;
declare var AudioSynth: any;

export class PianoSynthPlayer {
    private noteStartCallback: any;
    private noteEndCallback: any;
    private noteIds: number[];
    private noteDuration: number;
    private isChord: boolean;
    private synth: any;

    private callingContext: any;
    private loaded: boolean = false;

    constructor(noteIds: number[], noteDuration: number, isChord: boolean, noteStartCallback: any, noteEndCallback: any, callingContext: any) {
        this.noteIds = noteIds;
        this.noteStartCallback = noteStartCallback;
        this.noteEndCallback = noteEndCallback;
        this.noteDuration = noteDuration;
        this.isChord = isChord;
        this.callingContext = callingContext;

        this.synth = new AudioSynth();
    }

    public play() {
        if (this.isChord === false) {
            this.playNote(0);
        } else {
            this.playChord();
        }
    }

    private playChord() {
        for(var i = 0; i < this.noteIds.length; i++) {
            var note = MusicDefinitions.notes[this.noteIds[i]];
            var noteName = note.name;
            if (noteName.length > 2) {
                noteName = noteName.substring(0, 2);
            }
            this.synth.play(0, noteName, note.octave, 2);
        }
    }
    
    private playNote(index: number) {
        var self = this;

        if (index > 0) {
            var lastNote = MusicDefinitions.notes[this.noteIds[index - 1]];
            var noteName = lastNote.name;
            if (noteName.length > 2) {
                noteName = noteName.substring(0, 2);
            }
            if (this.noteEndCallback != null) {
                this.noteEndCallback(index - 1, this.callingContext);
            }
        }

        if (index < this.noteIds.length) {
            var note = MusicDefinitions.notes[this.noteIds[index]];
            var noteName = note.name;
            if (noteName.length > 2) {
                noteName = noteName.substring(0, 2);
            }

            if (this.noteStartCallback != null) {
                this.noteStartCallback(index, this.callingContext);
            }
            this.synth.play(0, noteName, note.octave, 2);

            setTimeout(() => {
                self.playNote(index + 1);
            }, this.noteDuration * 1000);
        }
	}
}