import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { RequestComponent } from './customer/Components/request/request.component';
import { RequestOffersComponent } from './customer/Components/RequestOffers/RequestOffers.component';
import { SendOffersComponent } from './vendor/Components/SendOffers/SendOffers.component';
import { RateServiceComponent } from './customer/Components/RateService/RateService.component';
import { AddProduectsComponent } from './vendor/Components/add-produects/AddProduectsComponent';
import { ProductListComponent } from './vendor/Components/product-list/product-list.component';
import { RequestListComponent } from './vendor/Components/request-list/request-list.component';
import { SeeCustomerRequestsComponent } from './customer/Components/see-customer-requests/see-customer-requests.component';
import { ProductDetailsComponent } from './vendor/product-details/product-details.component';
import { AddWorkHistoryComponent } from './services-provider/Components/add-work-history/add-work-history.component';
import { ServiceProviderSendOfferComponent } from './services-provider/Components/service-provider-send-offer/service-provider-send-offer.component';
import { OrderDetailsComponent } from './vendor/Components/order-details/order-details.component';



const routes: Routes = [

	// Shared Components
	{ path: 'profile', component: ProfileComponent },

	// Customer Components
	{ path: 'requests', component: RequestComponent },
	{ path: 'offers/:id', component: RequestOffersComponent },
	{ path: 'rate-service/:id', component: RateServiceComponent },
      {path:'seecustomer',component:SeeCustomerRequestsComponent},
	// Vendor Components
	{ path: 'add-product', component: AddProduectsComponent },
	{ path: 'add-work-history', component: AddWorkHistoryComponent },
	{ path:'productlist',component:ProductListComponent},
	{path:"Orderdetals",component:OrderDetailsComponent},
	{
		path:'productsdetails/id',component:ProductDetailsComponent
	},
	{path:"requestlist",component:RequestListComponent} ,

	// Service Provider Compproductsdetailsonents
	{ path: 'bids', component: SendOffersComponent },
	{ path: 'sendoffer', component: ServiceProviderSendOfferComponent },

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ModulesRoutingModule { }
