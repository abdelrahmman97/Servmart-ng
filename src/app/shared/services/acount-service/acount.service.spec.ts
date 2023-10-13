/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AcountService } from './acount.service'; 

describe('Service: Acount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcountService]
    });
  });

  it('should ...', inject([AcountService], (service: AcountService) => {
    expect(service).toBeTruthy();
  }));
});
