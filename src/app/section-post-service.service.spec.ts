import { TestBed } from '@angular/core/testing';

import { SectionPostServiceService } from './section-post-service.service';

describe('SectionPostServiceService', () => {
  let service: SectionPostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionPostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
