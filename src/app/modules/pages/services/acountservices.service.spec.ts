import { TestBed } from '@angular/core/testing';

import { AcountservicesService } from './acountservices.service';

describe('AcountservicesService', () => {
  let service: AcountservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcountservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
