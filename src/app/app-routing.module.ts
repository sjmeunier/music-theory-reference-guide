import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScalesComponent } from './scales/scales.component';
import { ChordsComponent } from './chords/chords.component';
import { InstrumentRangesComponent } from './instrument-ranges/instrument-ranges.component';
import { TerminologyComponent } from './terminology/terminology.component';
import { CircleOfFifthsComponent } from './circle-of-fifths/circle-of-fifths.component';
import { ScaleChordsComponent } from './scale-chords/scale-chords.component';
import { IntervalsComponent } from './intervals/intervals.component';
import { PianoComponent } from './piano/piano.component';
import { MusicNotationComponent } from './music-notation/music-notation.component';
import { ChordFinderComponent } from './chord-finder/chord-finder.component';
import { TuningsComponent } from './tunings/tunings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'scales', component: ScalesComponent },
  { path: 'chords', component: ChordsComponent },
  { path: 'instrument-ranges', component: InstrumentRangesComponent },
  { path: 'terminology', component: TerminologyComponent },
  { path: 'circle-of-fifths', component: CircleOfFifthsComponent },
  { path: 'scale-chords', component: ScaleChordsComponent },
  { path: 'intervals', component: IntervalsComponent },
  { path: 'piano', component: PianoComponent },
  { path: 'music-notation', component: MusicNotationComponent },
  { path: 'tunings', component: TuningsComponent },
  { path: 'chord-finder', component: ChordFinderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
