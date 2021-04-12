import { TestBed } from '@angular/core/testing';

import { SessionentityService } from './sessionentity.service';

describe('SessionentityService', () => {
  let service: SessionentityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionentityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
