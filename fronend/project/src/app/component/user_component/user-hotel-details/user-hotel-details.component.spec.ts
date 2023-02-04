import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHotelDetailsComponent } from './user-hotel-details.component';

describe('UserHotelDetailsComponent', () => {
  let component: UserHotelDetailsComponent;
  let fixture: ComponentFixture<UserHotelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHotelDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
