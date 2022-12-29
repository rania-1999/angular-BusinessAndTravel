import { TestBed } from '@angular/core/testing';

import { BestpostService } from './bestpost.service';

describe('BestpostService', () => {
  let service: BestpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
