import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoComponent } from './piano.component';

describe('PianoComponent', () => {
  let component: PianoComponent;
  let fixture: ComponentFixture<PianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
