import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAddDetailsComponent } from './hotel-add-details.component';

describe('HotelAddDetailsComponent', () => {
  let component: HotelAddDetailsComponent;
  let fixture: ComponentFixture<HotelAddDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelAddDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
