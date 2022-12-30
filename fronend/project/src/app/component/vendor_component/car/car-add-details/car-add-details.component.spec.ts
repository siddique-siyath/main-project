import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAddDetailsComponent } from './car-add-details.component';

describe('CarAddDetailsComponent', () => {
  let component: CarAddDetailsComponent;
  let fixture: ComponentFixture<CarAddDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAddDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
