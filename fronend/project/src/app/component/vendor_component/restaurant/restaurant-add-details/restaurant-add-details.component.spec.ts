import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAddDetailsComponent } from './restaurant-add-details.component';

describe('RestaurantAddDetailsComponent', () => {
  let component: RestaurantAddDetailsComponent;
  let fixture: ComponentFixture<RestaurantAddDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAddDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
