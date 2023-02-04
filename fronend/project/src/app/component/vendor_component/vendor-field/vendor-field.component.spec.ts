import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorFieldComponent } from './vendor-field.component';

describe('VendorFieldComponent', () => {
  let component: VendorFieldComponent;
  let fixture: ComponentFixture<VendorFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
