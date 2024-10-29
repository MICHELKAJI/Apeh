import { TestBed } from '@angular/core/testing';

import { ServiceActualityService } from './service-actuality.service';

describe('ServiceActualityService', () => {
  let service: ServiceActualityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceActualityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
