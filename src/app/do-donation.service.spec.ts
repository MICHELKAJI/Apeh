import { TestBed } from '@angular/core/testing';

import { DoDonationService } from './do-donation.service';

describe('DoDonationService', () => {
  let service: DoDonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoDonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
