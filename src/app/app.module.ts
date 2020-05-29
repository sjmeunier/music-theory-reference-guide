import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScalesComponent } from './scales/scales.component';
import { HomeComponent } from './home/home.component';
import { ChordsComponent } from './chords/chords.component';
import { InstrumentRangesComponent } from './instrument-ranges/instrument-ranges.component';

@NgModule({
  declarations: [
    AppComponent,
    ScalesComponent,
    HomeComponent,
    ChordsComponent,
    InstrumentRangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
