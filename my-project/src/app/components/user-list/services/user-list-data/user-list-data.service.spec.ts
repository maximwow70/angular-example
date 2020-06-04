import { TestBed } from '@angular/core/testing';

import { UserListDataService } from './user-list-data.service';

describe('UserListDataService', () => {
  let service: UserListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
