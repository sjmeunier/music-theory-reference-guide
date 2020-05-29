import { Component, OnInit } from '@angular/core';
import { Player } from '../player/player';
import { NoteDefinitions } from '../data/note.definitions';

declare var Vex: any;

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.css']
})
export class ScalesComponent implements OnInit {

  constructor() { }

  private musicRenderer: any; 
  private player: Player;

  ngOnInit(): void {

    var div = document.getElementById("scaleMusic")

    this.musicRenderer = new Vex.Flow.Renderer(div, Vex.Flow.Renderer.Backends.SVG);
    this.renderScale("c", "major");
  }

  public renderScale(root: string, scaleType: string) {
    var noteIds = NoteDefinitions.scales[scaleType];
		
		var vexFlowNotes = [];
		for(var i = 0; i < noteIds.length; i++) {
			var noteId = noteIds[i];
			var vexFlowNote = new Vex.Flow.StaveNote({clef: "treble", keys: [noteId], duration: "w" });
									//.addModifier(0, new Vex.Flow.Annotation(noteTable[noteId].name)
									//	.setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM));
										
			if (NoteDefinitions.notes[noteId].name.includes("b")) {
				vexFlowNote = vexFlowNote.addAccidental(0, new Vex.Flow.Accidental("b"));
			} else if (NoteDefinitions.notes[noteId].name.includes("#")) {
				vexFlowNote = vexFlowNote.addAccidental(0, new Vex.Flow.Accidental("#"));
			}
			vexFlowNotes.push(vexFlowNote);
    }
    

    this.musicRenderer.resize(300, 120);
    var context = this.musicRenderer.getContext();

		var stave = new Vex.Flow.Stave(10, 0, 280);
		stave.addClef("treble");
		stave.setContext(context).draw();

		var beams = Vex.Flow.Beam.generateBeams(vexFlowNotes);

		var voice = new Vex.Flow.Voice({num_beats: 8,  beat_value: 1});
		voice.addTickables(vexFlowNotes);

		var formatter = new Vex.Flow.Formatter().joinVoices([voice]).format([voice], 250);
		voice.draw(context, stave);
    beams.forEach(function(b: any) {b.setContext(context).draw()});
    
    this.player = new Player(noteIds, vexFlowNotes, 0.3, 0.0);
  }

  public play() {
    this.player.play();
  }
}


