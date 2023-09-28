import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCustomerRequestsComponent } from './see-customer-requests.component';

describe('SeeCustomerRequestsComponent', () => {
  let component: SeeCustomerRequestsComponent;
  let fixture: ComponentFixture<SeeCustomerRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeCustomerRequestsComponent]
    });
    fixture = TestBed.createComponent(SeeCustomerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
