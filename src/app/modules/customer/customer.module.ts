import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { CartComponent } from './Components/cart/cart.component';
import { RequestComponent } from './Components/request/request.component';
import { SearchVendorsComponent } from './Components/search-vendors/search-vendors.component';
import { SeeCustomerRequestsComponent } from './Components/see-customer-requests/see-customer-requests.component';



@NgModule({
  declarations: [
    CheckOutComponent,
    CartComponent,
    RequestComponent,
    SearchVendorsComponent,
    SeeCustomerRequestsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
