import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubNavbarComponent } from './user-sub-navbar.component';

describe('UserSubNavbarComponent', () => {
  let component: UserSubNavbarComponent;
  let fixture: ComponentFixture<UserSubNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSubNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
