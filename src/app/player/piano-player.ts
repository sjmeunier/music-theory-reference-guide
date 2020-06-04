import { MusicDefinitions } from '../data/music-definitions';
import { Piano } from '@tonejs/piano';

export class PianoPlayer {
    private noteStartCallback: any;
    private noteEndCallback: any;
    private noteIds: number[];
    private noteDuration: number;
    private isChord: boolean;
    private piano: any;

    private callingContext: any;
    private loaded: boolean = false;

    constructor(noteIds: number[], noteDuration: number, isChord: boolean, noteStartCallback: any, noteEndCallback: any, callingContext: any) {
        this.noteIds = noteIds;
        this.noteStartCallback = noteStartCallback;
        this.noteEndCallback = noteEndCallback;
        this.noteDuration = noteDuration * 1000;
        this.isChord = isChord;
        this.callingContext = callingContext;

        this.piano = new Piano({
            velocities: 5
        });
        this.piano.toDestination();
        this.piano.load().then(() => {
            this.loaded = true;
        })
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
        var noteList = [];
        for(var i = 0; i < this.noteIds.length; i++) {
            var note = MusicDefinitions.notes[this.noteIds[i]];
            var noteName = note.name;
            if (noteName.length > 2) {
                noteName = noteName.substring(0, 2);
            }
            noteList.push(noteName + note.octave);

        }
        for(var i = 0; i < noteList.length; i++) {
            this.piano.keyDown(noteList[i]);
        }
        setTimeout(() => {
            for(var i = 0; i < noteList.length; i++) {
                this.piano.keyUp(noteList[i]);
            }
        }, this.noteDuration);
    }
    
    private playNote(index: number) {
        var self = this;

        if (index > 0) {
            var lastNote = MusicDefinitions.notes[this.noteIds[index - 1]];
            var noteName = lastNote.name;
            if (noteName.length > 2) {
                noteName = noteName.substring(0, 2);
            }

            this.noteEndCallback(index - 1, this.callingContext);
            this.piano.keyUp(noteName + lastNote.octave);
        }

        if (index < this.noteIds.length) {
            var note = MusicDefinitions.notes[this.noteIds[index]];
            var noteName = note.name;
            if (noteName.length > 2) {
                noteName = noteName.substring(0, 2);
            }

            this.noteStartCallback(index, this.callingContext);
            this.piano.keyDown(noteName + note.octave);

            setTimeout(() => {
                self.playNote(index + 1);
            }, this.noteDuration);
        }
	}
}