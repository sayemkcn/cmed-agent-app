import { TestBed } from '@angular/core/testing';

import { MemberScreened.ServiceService } from './member-screened.service.service';

describe('MemberScreened.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberScreened.ServiceService = TestBed.get(MemberScreened.ServiceService);
    expect(service).toBeTruthy();
  });
});
