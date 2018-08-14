import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaThreeComponent } from './area-three.component';

describe('AreaThreeComponent', () => {
  let component: AreaThreeComponent;
  let fixture: ComponentFixture<AreaThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
