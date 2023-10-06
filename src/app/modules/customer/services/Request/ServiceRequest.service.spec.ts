/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceRequestService } from './ServiceRequest.service';

describe('Service: ServiceRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceRequestService]
    });
  });

  it('should ...', inject([ServiceRequestService], (service: ServiceRequestService) => {
    expect(service).toBeTruthy();
  }));
});
