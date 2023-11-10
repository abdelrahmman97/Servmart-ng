/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequestServiceCategoriesService } from './RequestServiceCategories.service';

describe('Service: RequestServiceCategories', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestServiceCategoriesService]
    });
  });

  it('should ...', inject([RequestServiceCategoriesService], (service: RequestServiceCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
