import { TestBed } from '@angular/core/testing';

import { SingleEmployeeService } from './single-employee.service.service';

describe('SingleEmployee.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleEmployeeService = TestBed.get(SingleEmployeeService);
    expect(service).toBeTruthy();
  });
});
