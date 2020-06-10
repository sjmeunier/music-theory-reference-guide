import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicNotationComponent } from './music-notation.component';

describe('MusicNotationComponent', () => {
  let component: MusicNotationComponent;
  let fixture: ComponentFixture<MusicNotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicNotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
