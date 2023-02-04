import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarComponent } from './user-car.component';

describe('UserCarComponent', () => {
  let component: UserCarComponent;
  let fixture: ComponentFixture<UserCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
