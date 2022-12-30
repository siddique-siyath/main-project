import { TestBed } from '@angular/core/testing';

import { AdminServicesServicesService } from './admin-services.services.service';

describe('AdminServicesServicesService', () => {
  let service: AdminServicesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServicesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
