import { TestBed } from '@angular/core/testing';

import { ServiceNewslatterService } from './service-newslatter.service';

describe('ServiceNewslatterService', () => {
  let service: ServiceNewslatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceNewslatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
