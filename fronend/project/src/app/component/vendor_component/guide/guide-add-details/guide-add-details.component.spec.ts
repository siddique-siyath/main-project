import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideAddDetailsComponent } from './guide-add-details.component';

describe('GuideAddDetailsComponent', () => {
  let component: GuideAddDetailsComponent;
  let fixture: ComponentFixture<GuideAddDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideAddDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
