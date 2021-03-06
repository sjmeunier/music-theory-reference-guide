import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordFinderComponent } from './chord-finder.component';

describe('ChordFinderComponent', () => {
  let component: ChordFinderComponent;
  let fixture: ComponentFixture<ChordFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
