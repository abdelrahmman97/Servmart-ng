import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { RequestComponent } from './customer/Components/request/request.component';
import { RequestOffersComponent } from './customer/Components/RequestOffers/RequestOffers.component';
import { SendOffersComponent } from './vendor/Components/SendOffers/SendOffers.component';
import { RateServiceComponent } from './customer/Components/RateService/RateService.component';
import { AddProduectsComponent } from './vendor/Components/add-produects/add-produects.component';
import { AddWorkHistoryComponent } from './services-provider/Components/add-work-history/add-work-history.component';



const routes: Routes = [

	// Shared Components
	{ path: 'profile', component: ProfileComponent },

	// Customer Components
	{ path: 'requests', component: RequestComponent },
	{ path: 'offers/:id', component: RequestOffersComponent },
	{ path: 'rate-service/:id', component: RateServiceComponent },

	// Vendor Components
	{ path: 'add-product', component: AddProduectsComponent },
	{ path: 'add-work-history', component: AddWorkHistoryComponent },

	// Service Provider Components
	{ path: 'bids', component: SendOffersComponent },

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ModulesRoutingModule { }
