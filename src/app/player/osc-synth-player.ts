import { MusicDefinitions } from '../data/music-definitions';

export class OscSynthPlayer {
    private noteStartCallback: any;
    private noteEndCallback: any;
    private noteIds: number[];
    private noteDuration: number;

    private audioContext: any;
    private oscillators: any[];
    private gain: any;

    private callingContext: any;
    private loaded: boolean;
    private isChord: boolean;

    constructor(noteIds: number[], noteDuration: number, isChord: boolean, noteStartCallback: any, noteEndCallback: any, callingContext: any) {
        this.noteIds = noteIds;
        this.noteStartCallback = noteStartCallback;
        this.noteEndCallback = noteEndCallback;
        this.noteDuration = noteDuration * 1000;
        this.callingContext = callingContext;

        this.isChord = isChord;

        try {
            this.audioContext = new (window['AudioContext'] || window['webkitAudioContext'])();
            if (this.audioContext !== undefined) {
                this.loaded = true;

                this.gain = this.audioContext.createGain();
                this.gain.gain.value = 0;

                var oscillatorCount = 1;
                if (isChord === true) {
                    oscillatorCount = noteIds.length;
                }

                this.oscillators = [];
                for(var i = 0; i < oscillatorCount; i++) {
                    var oscillator = this.audioContext.createOscillator();
                    oscillator.type = "sine";
                    oscillator.frequency.value = 440;
                    oscillator.start(0);
                    oscillator.connect(this.gain);
                    this.oscillators.push(oscillator);
                }

                this.gain.connect(this.audioContext.destination);
            } else {
                this.loaded = false;
            }
        } catch (error) {
            this.loaded = false;
        }
    }

    public play() {
        if (this.loaded) {
            if (this.isChord === false) {
                this.playNote(0);
            } else {
                this.playChord();
            }
        }
    }

    private playChord() {
        var self = this;
        for(var i = 0; i < this.oscillators.length; i++) {
            this.oscillators[i].frequency.value = MusicDefinitions.notes[this.noteIds[i]].frequency;
        }
        this.gain.gain.value = 1;
        setTimeout(() => {
            self.gain.gain.value = 0;
        }, this.noteDuration);
    }
    
    private playNote(index: number) {
        var self = this;

        var note = MusicDefinitions.notes[this.noteIds[index]];

        if (index > 0) {
            if (this.noteEndCallback != null) {
                this.noteEndCallback(index - 1, this.callingContext);
            }
            this.gain.gain.value = 0;
        }

        if (index < this.noteIds.length) {
            if (this.noteStartCallback != null) {
                this.noteStartCallback(index, this.callingContext);
            }

            this.oscillators[0].frequency.value = note.frequency;
            this.gain.gain.value = 1;

            setTimeout(() => {
                self.playNote(index + 1);
            }, this.noteDuration);
        }
	}
}