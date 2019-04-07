import { TestBed } from '@angular/core/testing';

import { ElevatorInterceptorService } from './elevator-interceptor.service';

describe('ElevatorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElevatorInterceptorService = TestBed.get(ElevatorInterceptorService);
    expect(service).toBeTruthy();
  });
});
