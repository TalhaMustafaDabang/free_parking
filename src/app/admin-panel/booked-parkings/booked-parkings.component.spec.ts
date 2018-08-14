import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedParkingsComponent } from './booked-parkings.component';

describe('BookedParkingsComponent', () => {
  let component: BookedParkingsComponent;
  let fixture: ComponentFixture<BookedParkingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedParkingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedParkingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
