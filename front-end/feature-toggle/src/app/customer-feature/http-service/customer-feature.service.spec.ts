import { TestBed } from '@angular/core/testing';

import { CustomerFeatureService } from './customer-feature.service';

describe('CustomerFeatureService', () => {
  let service: CustomerFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
