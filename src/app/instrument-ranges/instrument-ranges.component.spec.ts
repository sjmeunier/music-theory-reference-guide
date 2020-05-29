import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentRangesComponent } from './instrument-ranges.component';

describe('InstrumentRangesComponent', () => {
  let component: InstrumentRangesComponent;
  let fixture: ComponentFixture<InstrumentRangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentRangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentRangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
