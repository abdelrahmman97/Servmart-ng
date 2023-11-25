/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NotificationService } from './Notification.service';

describe('Service: NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService]
    });
  });

  it('should ...', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));
});
