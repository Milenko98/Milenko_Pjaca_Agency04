import { TestBed } from '@angular/core/testing';

import { HeistServiceService } from './heist-service.service';

describe('HeistServiceService', () => {
  let service: HeistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
