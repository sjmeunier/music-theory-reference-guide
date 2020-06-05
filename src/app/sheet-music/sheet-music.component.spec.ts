import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetMusicComponent } from './sheet-music.component';

describe('SheetMusicComponent', () => {
  let component: SheetMusicComponent;
  let fixture: ComponentFixture<SheetMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
