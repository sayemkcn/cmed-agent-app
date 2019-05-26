import { TestBed } from '@angular/core/testing';

import { CmedservicesService } from './cmedservices.service';

describe('CmedservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmedservicesService = TestBed.get(CmedservicesService);
    expect(service).toBeTruthy();
  });
});
