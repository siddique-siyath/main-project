import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAddServiceComponent } from './hotel-add-service.component';

describe('HotelAddServiceComponent', () => {
  let component: HotelAddServiceComponent;
  let fixture: ComponentFixture<HotelAddServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelAddServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelAddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
