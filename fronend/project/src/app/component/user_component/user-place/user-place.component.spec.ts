import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlaceComponent } from './user-place.component';

describe('UserPlaceComponent', () => {
  let component: UserPlaceComponent;
  let fixture: ComponentFixture<UserPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
