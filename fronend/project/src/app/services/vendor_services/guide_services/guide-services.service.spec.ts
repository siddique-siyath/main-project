import { TestBed } from '@angular/core/testing';

import { GuideServicesService } from './guide-services.service';

describe('GuideServicesService', () => {
  let service: GuideServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuideServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
