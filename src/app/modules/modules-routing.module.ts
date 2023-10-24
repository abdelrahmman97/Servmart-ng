import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { RequestComponent } from './customer/Components/request/request.component';
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
import { authGuard } from '../shared/guards/AuthGuard/auth.guard';
import { ServicesComponent } from './pages/services/services.component';



const routes: Routes = [

	// Shared Components
	{ path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
	{ path: "shop", component: ShopComponent },
	{ path: "details", component: DetailsComponent },
	{ path: "settings", component: AccountSettingsComponent, canActivate: [authGuard] },
	{ path: "accountUnderReview", component: PendingAccountComponent, canActivate: [authGuard] },
	{ path: "earning", component: EaringComponent, canActivate: [authGuard] },
	{ path: 'cart', component: CartComponent, canActivate: [authGuard] },
	{ path: 'checkout', component: CheckOutComponent, canActivate: [authGuard] },
	{ path: 'services', component: ServicesComponent, canActivate: [authGuard] },

	// Customer Components
	{ path: 'requests', component: RequestComponent, canActivate: [authGuard] },
	{ path: 'offers/:id', component: RequestOffersComponent, canActivate: [authGuard] },
	{ path: 'rateService/:id', component: RateServiceComponent, canActivate: [authGuard] },
	{ path: 'vendors', component: SearchVendorsComponent },

	// Vendor Components
	{ path: 'addProduct', component: AddProduectsComponent, canActivate: [authGuard] },
	{ path: 'addWorkHistory', component: AddWorkHistoryComponent, canActivate: [authGuard] },
	{ path: "orderDetails/:id", component: OrderDetailsComponent, canActivate: [authGuard] },
	{ path: "orderList", component: RequestListComponent, canActivate: [authGuard] },
	{ path: 'productList', component: ProductListComponent, canActivate: [authGuard] },
	{ path: 'product/:id', component: ProductDetailsComponent },

	// Service Provider Compproducts
	{ path: 'bids', component: SendOffersComponent, canActivate: [authGuard] },
	{ path: 'service/:id', component: DetailsComponent },
	{ path: 'sendOffer/:id', component: ServiceProviderSendOfferComponent, canActivate: [authGuard] },


];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ModulesRoutingModule { }
