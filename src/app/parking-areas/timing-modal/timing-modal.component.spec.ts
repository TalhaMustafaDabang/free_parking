import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingModalComponent } from './timing-modal.component';

describe('TimingModalComponent', () => {
  let component: TimingModalComponent;
  let fixture: ComponentFixture<TimingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
