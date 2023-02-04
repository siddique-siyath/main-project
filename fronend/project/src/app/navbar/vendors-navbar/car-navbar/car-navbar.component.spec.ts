import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarNavbarComponent } from './car-navbar.component';

describe('CarNavbarComponent', () => {
  let component: CarNavbarComponent;
  let fixture: ComponentFixture<CarNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
