/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PreferredThemeService } from './PreferredTheme.service';

describe('Service: PreferredTheme', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreferredThemeService]
    });
  });

  it('should ...', inject([PreferredThemeService], (service: PreferredThemeService) => {
    expect(service).toBeTruthy();
  }));
});
