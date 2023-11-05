import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userLogedInGuard } from './user-loged-in.guard';

describe('userLogedInGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userLogedInGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
