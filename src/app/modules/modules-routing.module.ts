import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { RequestComponent } from './customer/Components/request/request.component';
import { RequestOffersComponent } from './customer/Components/RequestOffers/RequestOffers.component';
import { SendOffersComponent } from './vendor/Components/SendOffers/SendOffers.component';
import { RateServiceComponent } from './customer/Components/RateService/RateService.component';
import { SearchVendorsComponent } from './customer/Components/search-vendors/search-vendors.component';
import { EaringComponent } from './vendor/Components/earing/earing.component'; 
import { PendingAcountComponent } from './pages/pending-acount/pending-acount.component';
import { AccountSettingsComponent } from './pages/AccountSettings/AccountSettings.component';



const routes: Routes = [

	// Shared Components
	{ path: 'profile', component: ProfileComponent },

	// Customer Components
	{ path: 'requests', component: RequestComponent },
	{ path: 'offers/:id', component: RequestOffersComponent },
	{ path: 'rate-service/:id', component: RateServiceComponent },
	{ path: 'searchvendor', component: SearchVendorsComponent },
	{path: 'pendingacount',component:PendingAcountComponent},
	{path: 'accountsetting',component:AccountSettingsComponent},

	// Vendor Components
	{ path: 'bids', component: SendOffersComponent },
	{ path: 'earning', component: EaringComponent },

	// Service Provider Components

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ModulesRoutingModule { }
