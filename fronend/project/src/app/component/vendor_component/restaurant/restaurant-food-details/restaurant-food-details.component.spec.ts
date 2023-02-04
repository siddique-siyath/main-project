import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFoodDetailsComponent } from './restaurant-food-details.component';

describe('RestaurantFoodDetailsComponent', () => {
  let component: RestaurantFoodDetailsComponent;
  let fixture: ComponentFixture<RestaurantFoodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantFoodDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantFoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
