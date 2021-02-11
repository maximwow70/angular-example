import { TestBed } from '@angular/core/testing';

import { AboutUsGuardGuard } from './about-us-guard.guard';

describe('AboutUsGuardGuard', () => {
  let guard: AboutUsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AboutUsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
