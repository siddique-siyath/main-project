import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelEditServiceComponent } from './hotel-edit-service.component';

describe('HotelEditServiceComponent', () => {
  let component: HotelEditServiceComponent;
  let fixture: ComponentFixture<HotelEditServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelEditServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelEditServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
