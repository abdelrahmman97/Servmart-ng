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
import { ProductDetailsComponent } from './vendor/product-details/product-details.component';
import { RequestListComponent } from './vendor/Components/request-list/request-list.component';
import { SearchVendorsComponent } from './customer/Components/search-vendors/search-vendors.component';
import { EaringComponent } from './vendor/Components/earing/earing.component';
import { AccountSettingsComponent } from './pages/AccountSettings/AccountSettings.component';
import { PendingAcountComponent } from './pages/pending-acount/pending-acount.component';



const routes: Routes = [

	// Shared Components
	{ path: 'profile', component: ProfileComponent },
	{ path: "shop", component: ShopComponent },
	{ path: "details", component: DetailsComponent },
	{ path: "acountsetting", component: AccountSettingsComponent },
	{ path: "pendingacount", component: PendingAcountComponent},


	// Customer Components
	{ path: 'requests', component: RequestComponent },
	{ path: 'offers/:id', component: RequestOffersComponent },
	{ path: 'rate-service/:id', component: RateServiceComponent },
	{ path: 'servendor', component: SearchVendorsComponent },
	// Vendor Components
	{ path: 'add-product', component: AddProduectsComponent },
	{ path: 'add-work-history', component: AddWorkHistoryComponent },
	{ path: 'productlist', component: ProductListComponent },
	{ path: "Orderdetals", component: OrderDetailsComponent },
	{ path: 'productsdetails/:id', component: ProductDetailsComponent },
	{ path: "requestlist", component: RequestListComponent },
	{ path: "earing", component: EaringComponent },

	// Service Provider Compproductsdetailsonents
	{ path: 'bids', component: SendOffersComponent },

	// Service Provider Components

];

@NgModule( {
	imports: [RouterModule.forChild( routes )],
	exports: [RouterModule]
} )
export class ModulesRoutingModule { }
