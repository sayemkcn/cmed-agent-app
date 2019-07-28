import { TestBed } from '@angular/core/testing';

import { CmedServicesService } from './cmedservices.service';

describe('CmedServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmedServicesService = TestBed.get(CmedServicesService);
    expect(service).toBeTruthy();
  });
});
