import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalsComponent } from './intervals.component';

describe('IntervalsComponent', () => {
  let component: IntervalsComponent;
  let fixture: ComponentFixture<IntervalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
