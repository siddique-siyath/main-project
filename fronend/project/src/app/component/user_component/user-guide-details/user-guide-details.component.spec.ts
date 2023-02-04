import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGuideDetailsComponent } from './user-guide-details.component';

describe('UserGuideDetailsComponent', () => {
  let component: UserGuideDetailsComponent;
  let fixture: ComponentFixture<UserGuideDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGuideDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGuideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
