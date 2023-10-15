/* tslint:disable:no-unused-variable */
 
import { TestBed, async, inject } from '@angular/core/testing';
import { EarningService } from './earning.service';

describe('Service: Earning', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EarningService]
    });
  });

  it('should ...', inject([EarningService], (service: EarningService) => {
    expect(service).toBeTruthy();
  }));
});
