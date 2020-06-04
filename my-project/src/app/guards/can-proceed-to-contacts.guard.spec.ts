import { TestBed } from '@angular/core/testing';

import { CanProceedToContactsGuard } from './can-proceed-to-contacts.guard';

describe('CanProceedToContactsGuard', () => {
  let guard: CanProceedToContactsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanProceedToContactsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
