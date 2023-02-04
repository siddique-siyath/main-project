import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideNavbarComponent } from './guide-navbar.component';

describe('GuideNavbarComponent', () => {
  let component: GuideNavbarComponent;
  let fixture: ComponentFixture<GuideNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
