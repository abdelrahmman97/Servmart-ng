/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequestsOrdersService } from './Requests-Orders.service';

describe('Service: RequestsOrders', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestsOrdersService]
    });
  });

  it('should ...', inject([RequestsOrdersService], (service: RequestsOrdersService) => {
    expect(service).toBeTruthy();
  }));
});
