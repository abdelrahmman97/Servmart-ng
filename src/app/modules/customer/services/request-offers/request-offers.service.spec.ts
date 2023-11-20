/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequestOffersService } from './request-offers.service';

describe('Service: RequestOffers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestOffersService]
    });
  });

  it('should ...', inject([RequestOffersService], (service: RequestOffersService) => {
    expect(service).toBeTruthy();
  }));
});
