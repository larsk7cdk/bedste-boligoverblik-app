import { TestBed } from '@angular/core/testing';

import { BoligGuard } from './bolig.guard';

describe('BoligGuard', () => {
  let guard: BoligGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BoligGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
