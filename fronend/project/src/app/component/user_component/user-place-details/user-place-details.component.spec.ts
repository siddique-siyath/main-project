import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlaceDetailsComponent } from './user-place-details.component';

describe('UserPlaceDetailsComponent', () => {
  let component: UserPlaceDetailsComponent;
  let fixture: ComponentFixture<UserPlaceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPlaceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPlaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
