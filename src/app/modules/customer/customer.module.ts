import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { CartComponent } from './Components/cart/cart.component';
import { CustomerRequestsListComponent } from './Components/customer-requests-list/customer-requests-list.component';
import { SearchVendorsComponent } from './Components/search-vendors/search-vendors.component';
import { RequestOffersComponent } from './Components/RequestOffers/RequestOffers.component';
import { RateServiceComponent } from './Components/RateService/RateService.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from "../../core/core.module";
import { AddRequestComponent } from './Components/addRequest/addRequest.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmptyCartComponent } from './Components/cart/components/empty-cart/empty-cart.component';
import { RequestListContentComponent } from './Components/customer-requests-list/components/request-list-content/request-list-content.component';



@NgModule( {
	declarations: [
		CheckOutComponent,
		CartComponent,
		CustomerRequestsListComponent,
		SearchVendorsComponent,
		RequestOffersComponent,
		RateServiceComponent,
		AddRequestComponent,
		OrdersComponent,
		EmptyCartComponent,
		RequestListContentComponent,
	],
	imports: [
		CommonModule,
		CoreModule,
		FormsModule,
		RouterModule,
		SharedModule,
		ReactiveFormsModule,
		NgxPaginationModule,
	]
} )

export class CustomerModule { }
