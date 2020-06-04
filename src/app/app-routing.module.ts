import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScalesComponent } from './scales/scales.component';
import { ChordsComponent } from './chords/chords.component';
import { InstrumentRangesComponent } from './instrument-ranges/instrument-ranges.component';
import { TerminologyComponent } from './terminology/terminology.component';
import { CircleOfFifthsComponent } from './circle-of-fifths/circle-of-fifths.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'scales', component: ScalesComponent },
  { path: 'chords', component: ChordsComponent },
  { path: 'instrument-ranges', component: InstrumentRangesComponent },
  { path: 'terminology', component: TerminologyComponent },
  { path: 'circle-of-fifths', component: CircleOfFifthsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
