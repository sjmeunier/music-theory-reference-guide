import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleChordsComponent } from './scale-chords.component';

describe('ScaleChordsComponent', () => {
  let component: ScaleChordsComponent;
  let fixture: ComponentFixture<ScaleChordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleChordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleChordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
