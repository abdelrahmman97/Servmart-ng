import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { CustomerRequestsListComponent } from './customer/Components/customer-requests-list/customer-requests-list.component';
import { RequestOffersComponent } from './customer/Components/RequestOffers/RequestOffers.component';
import { SendOffersComponent } from './vendor/Components/SendOffers/SendOffers.component';
import { RateServiceComponent } from './customer/Components/RateService/RateService.component';
import { DetailsComponent } from './pages/details/details.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AddProduectsComponent } from './vendor/Components/add-produects/AddProduectsComponent';
import { ProductListComponent } from './vendor/Components/product-list/product-list.component';
import { AddWorkHistoryComponent } from './services-provider/Components/add-work-history/add-work-history.component';
import { OrderDetailsComponent } from './vendor/Components/order-details/order-details.component';
import { ProductDetailsComponent } from './vendor/Components/product-details/product-details.component';
import { RequestListComponent } from './vendor/Components/request-list/request-list.component';
import { SearchVendorsComponent } from './customer/Components/search-vendors/search-vendors.component';
import { EaringComponent } from './vendor/Components/earing/earing.component';
import { AccountSettingsComponent } from './pages/AccountSettings/AccountSettings.component';
import { PendingAccountComponent } from './pages/pending-account/pending-account.component';
import { ServiceProviderSendOfferComponent } from './services-provider/Components/service-provider-send-offer/service-provider-send-offer.component';
import { CartComponent } from './customer/Components/cart/cart.component';
import { CheckOutComponent } from './customer/Components/check-out/check-out.component';
import { ServicesComponent } from './pages/services/services.component';
import { AddRequestComponent } from './customer/Components/addRequest/addRequest.component';
import { RequestOrdersComponent } from './services-provider/Components/requestOrders/requestOrders.component';
import { userLogedInGuard } from '../shared/guards/userLogedInGuard/user-loged-in.guard';
import { EditComponent } from './vendor/Components/edit/edit.component';



const routes: Routes = [

	// Shared Components
	{ path: 'profile', component: ProfileComponent, canActivate: [ userLogedInGuard ] },
	{ path: "shop", component: ShopComponent },
	{ path: "details/:productID", component: DetailsComponent },
	{ path: "settings", component: AccountSettingsComponent, canActivate: [ userLogedInGuard ] },
	{ path: "accountUnderReview", component: PendingAccountComponent, canActivate: [ userLogedInGuard ] },
	{ path: "earning", component: EaringComponent, canActivate: [ userLogedInGuard ] },
	{ path: 'cart', component: CartComponent, canActivate: [ userLogedInGuard ] },
	{ path: 'checkout', component: CheckOutComponent, canActivate: [ userLogedInGuard ] },
	{ path: 'services', component: ServicesComponent, canActivate: [ userLogedInGuard ] },

	// Customer Components
	{ path: 'myRequests', component: CustomerRequestsListComponent, canActivate: [ userLogedInGuard ] },
	{ path: 'offers/:id', component: RequestOffersComponent, canActivate: [ userLogedInGuard ] },
	{ path: 'rateService/:id', component: RateServiceComponent, canActivate: [ userLogedInGuard ] },
	{ path: 'vendors', component: SearchVendorsComponent },
	{ path: 'addRequest', component: AddRequestComponent, canActivate: [ userLogedInGuard ] },

	// Vendor Components
	{ path: 'addProduct', component: AddProduectsComponent, canActivate: [ userLogedInGuard ] },
	{ path: 'addWorkHistory', component: AddWorkHistoryComponent, canActivate: [ userLogedInGuard ] },
	{ path: "orderDetails/:id", component: OrderDetailsComponent, canActivate: [ userLogedInGuard ] },
	{ path: "orderList", component: RequestListComponent, canActivate: [ userLogedInGuard ] },
	{ path: 'productList', component: ProductListComponent, canActivate: [ userLogedInGuard ] },
	{ path: 'edit/:id', component: EditComponent, canActivate: [ userLogedInGuard ] },
	{ path: 'product/:id', component: ProductDetailsComponent },

	// Service Provider Compproducts
	{ path: 'bids', component: SendOffersComponent, canActivate: [ userLogedInGuard ] },
	{ path: 'service/:id', component: DetailsComponent },
	{ path: 'sendOffer/:id', component: ServiceProviderSendOfferComponent, canActivate: [ userLogedInGuard ] },
	{ path: 'requestsOrders', component: RequestOrdersComponent, canActivate: [ userLogedInGuard ] },


];

@NgModule( {
	imports: [ RouterModule.forChild( routes ) ],
	exports: [ RouterModule ]
} )
export class ModulesRoutingModule { }
