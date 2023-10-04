import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { CartComponent } from './Components/cart/cart.component';
import { RequestComponent } from './Components/request/request.component';
import { SearchVendorsComponent } from './Components/search-vendors/search-vendors.component';
import { SeeCustomerRequestsComponent } from './Components/see-customer-requests/see-customer-requests.component';
import { RequestOffersComponent } from './Components/RequestOffers/RequestOffers.component';
import { RouterModule } from '@angular/router';
import { RateServiceComponent } from './Components/RateService/RateService.component';



@NgModule( {
	declarations: [
		CheckOutComponent,
		CartComponent,
		RequestComponent,
		SearchVendorsComponent,
		SeeCustomerRequestsComponent,
		RequestOffersComponent,
		RateServiceComponent
	],
	imports: [
		CommonModule,
		RouterModule
	]
} )
export class CustomerModule { }
