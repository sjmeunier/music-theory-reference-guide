import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScalesComponent } from './scales/scales.component';
import { HomeComponent } from './home/home.component';
import { ChordsComponent } from './chords/chords.component';
import { InstrumentRangesComponent } from './instrument-ranges/instrument-ranges.component';
import { TerminologyComponent } from './terminology/terminology.component';
import { CircleOfFifthsComponent } from './circle-of-fifths/circle-of-fifths.component';
import { ScaleChordsComponent } from './scale-chords/scale-chords.component';
import { IntervalsComponent } from './intervals/intervals.component';
import { PianoComponent } from './piano/piano.component';
import { SheetMusicComponent } from './sheet-music/sheet-music.component';

@NgModule({
  declarations: [
    AppComponent,
    ScalesComponent,
    HomeComponent,
    ChordsComponent,
    InstrumentRangesComponent,
    TerminologyComponent,
    CircleOfFifthsComponent,
    ScaleChordsComponent,
    IntervalsComponent,
    PianoComponent,
    SheetMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
