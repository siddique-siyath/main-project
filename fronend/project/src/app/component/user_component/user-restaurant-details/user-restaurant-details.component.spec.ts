import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestaurantDetailsComponent } from './user-restaurant-details.component';

describe('UserRestaurantDetailsComponent', () => {
  let component: UserRestaurantDetailsComponent;
  let fixture: ComponentFixture<UserRestaurantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRestaurantDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRestaurantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
