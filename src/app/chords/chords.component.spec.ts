import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordsComponent } from './chords.component';

describe('ChordsComponent', () => {
  let component: ChordsComponent;
  let fixture: ComponentFixture<ChordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
