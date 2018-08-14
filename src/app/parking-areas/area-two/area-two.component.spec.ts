import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTwoComponent } from './area-two.component';

describe('AreaTwoComponent', () => {
  let component: AreaTwoComponent;
  let fixture: ComponentFixture<AreaTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
