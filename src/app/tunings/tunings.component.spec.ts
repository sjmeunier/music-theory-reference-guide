import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuningsComponent } from './tunings.component';

describe('TuningsComponent', () => {
  let component: TuningsComponent;
  let fixture: ComponentFixture<TuningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
