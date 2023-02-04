import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAddFoodDetailsComponent } from './restaurant-add-food-details.component';

describe('RestaurantAddFoodDetailsComponent', () => {
  let component: RestaurantAddFoodDetailsComponent;
  let fixture: ComponentFixture<RestaurantAddFoodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAddFoodDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantAddFoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
