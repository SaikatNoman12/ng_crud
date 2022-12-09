import { TestBed } from '@angular/core/testing';

import { UserspracticeService } from './userspractice.service';

describe('UserspracticeService', () => {
  let service: UserspracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserspracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
