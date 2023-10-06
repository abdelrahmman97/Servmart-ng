/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddProductService } from './AppProductService.service';

describe('Service: AppProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddProductService]
    });
  });

  it('should ...', inject([AddProductService], (service: AddProductService) => {
    expect(service).toBeTruthy();
  }));
});
