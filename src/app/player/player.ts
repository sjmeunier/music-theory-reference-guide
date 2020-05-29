import { NoteDefinitions } from '../data/note.definitions';
import { Note } from '../data';

export class Player {
    private audioContext: any;
	private noteIds: string[];
	private vexFlowNotes: any[];
	private noteDuration: number;
	private noteInterval: number;
    
    constructor(noteIds: string[], vexFlowNotes: any[], noteDuration: number, noteInterval: number) {
		this.noteIds = noteIds;
		this.vexFlowNotes = vexFlowNotes;
		this.noteDuration = noteDuration;
		this.noteInterval = noteInterval;
    }

	public play = function() {
		var duration = this.noteDuration;
		this.audioContext = new (window['AudioContext'] || window['webkitAudioContext'])();
		for(var i = 0; i < this.noteIds.length; i++) {
			this.playNote(NoteDefinitions.notes[this.noteIds[i]], i);
		}
	}
			
	private playNote = function(note: Note, index: number) {
		var self = this;
		var startTime = index * (this.noteDuration + this.noteInterval);
		const silentOscillator = this.audioContext.createOscillator();
		silentOscillator.connect(this.audioContext.destination);
		silentOscillator.onended = () => {
			self.setNoteStyle(index, "blue");
		};
		silentOscillator.start(startTime);
		silentOscillator.stop(startTime);

		var oscillator = this.audioContext.createOscillator();
		oscillator.type = "sine";
		oscillator.frequency.value = note.frequency;
		oscillator.onended = () => {
			self.setNoteStyle(index, "black");
		};
		oscillator.start(startTime);
		oscillator.stop(startTime + this.noteDuration);
		oscillator.connect(this.audioContext.destination);
	}
	
	private setNoteStyle = function (vexFlowNoteIndex: number, color: string) {
		this.vexFlowNotes[vexFlowNoteIndex].setStyle({fillStyle: color, strokeStyle: color});
		this.vexFlowNotes[vexFlowNoteIndex].draw();
	}
}