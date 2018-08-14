import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOneComponent } from './area-one.component';

describe('AreaOneComponent', () => {
  let component: AreaOneComponent;
  let fixture: ComponentFixture<AreaOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
