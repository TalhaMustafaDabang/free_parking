import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackReviewsComponent } from './feedback-reviews.component';

describe('FeedbackReviewsComponent', () => {
  let component: FeedbackReviewsComponent;
  let fixture: ComponentFixture<FeedbackReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
