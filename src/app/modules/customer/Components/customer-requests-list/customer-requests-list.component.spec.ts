import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRequestsListComponent } from './customer-requests-list.component';

describe('RequestComponent', () => {
  let component: CustomerRequestsListComponent;
  let fixture: ComponentFixture<CustomerRequestsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerRequestsListComponent]
    });
    fixture = TestBed.createComponent(CustomerRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
