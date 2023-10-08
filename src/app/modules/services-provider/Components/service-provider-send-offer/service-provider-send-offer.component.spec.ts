import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderSendOfferComponent } from './service-provider-send-offer.component';

describe('ServiceProviderSendOfferComponent', () => {
  let component: ServiceProviderSendOfferComponent;
  let fixture: ComponentFixture<ServiceProviderSendOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceProviderSendOfferComponent]
    });
    fixture = TestBed.createComponent(ServiceProviderSendOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
