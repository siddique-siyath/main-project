import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHotelComponent } from './user-hotel.component';

describe('UserHotelComponent', () => {
  let component: UserHotelComponent;
  let fixture: ComponentFixture<UserHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
