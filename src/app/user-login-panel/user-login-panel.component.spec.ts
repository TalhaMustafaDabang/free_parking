import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginPanelComponent } from './user-login-panel.component';

describe('UserLoginPanelComponent', () => {
  let component: UserLoginPanelComponent;
  let fixture: ComponentFixture<UserLoginPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
