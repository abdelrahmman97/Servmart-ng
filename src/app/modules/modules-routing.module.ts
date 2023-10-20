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
import { CartComponent } from './customer/Components/cart/cart.component';
import { PendingAccountComponent } from './pages/pending-account/pending-account.component';
import { CheckOutComponent } from './customer/Components/check-out/check-out.component';



const routes: Routes = [

	// Shared Components
	{ path: 'profile', component: ProfileComponent },
	{ path: "shop", component: ShopComponent },
	{ path: "details", component: DetailsComponent },
	{ path: "settings", component: AccountSettingsComponent },
	{ path: "accountUnderReview", component: PendingAccountComponent},

	// Customer Components
	{ path: 'requests', component: RequestComponent },
	{ path: 'offers/:id', component: RequestOffersComponent },
	{ path: 'rateService/:id', component: RateServiceComponent },
	{ path: 'vendors', component: SearchVendorsComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'checkout', component: CheckOutComponent },


	// Vendor Components
	{ path: 'add-work-history', component: AddWorkHistoryComponent },
	{ path: "orderdetail/:id", component: OrderDetailsComponent },
	{ path: "requestlist", component: RequestListComponent },
	{ path: "earing", component: EaringComponent },

	{ path: 'add-product', component: AddProduectsComponent },
	{ path: 'productlist', component: ProductListComponent },
	{ path: 'product/:id', component: ProductDetailsComponent },

	// Service Provider Compproducts
	{ path: 'bids', component: SendOffersComponent },
	{ path: 'service/:id', component: DetailsComponent },


];

@NgModule( {
	imports: [RouterModule.forChild( routes )],
	exports: [RouterModule]
} )
export class ModulesRoutingModule { }
