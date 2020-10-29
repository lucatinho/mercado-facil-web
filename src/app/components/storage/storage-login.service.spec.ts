import { TestBed } from '@angular/core/testing';

import { StorageLoginService } from './storage-login.service';

describe('StorageLoginService', () => {
  let service: StorageLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
