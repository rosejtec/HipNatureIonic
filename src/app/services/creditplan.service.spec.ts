import { TestBed } from '@angular/core/testing';

import { CreditplanService } from './creditplan.service';

describe('CreditplanService', () => {
  let service: CreditplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
