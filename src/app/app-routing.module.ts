import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScalesComponent } from './scales/scales.component';
import { ChordsComponent } from './chords/chords.component';
import { InstrumentRangesComponent } from './instrument-ranges/instrument-ranges.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'scales', component: ScalesComponent },
  { path: 'chords', component: ChordsComponent },
  { path: 'instrument-ranges', component: InstrumentRangesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
