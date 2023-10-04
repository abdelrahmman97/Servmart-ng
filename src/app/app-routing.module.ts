import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './shared/Components/profile/profile.component';
import { NotFoundComponent } from './shared/Components/not-found/not-found.component';
import { LayoutComponent } from './shared/Components/layout/layout.component';
import { RequestComponent } from './customer/Components/request/request.component';
import { RequestOffersComponent } from './customer/Components/RequestOffers/RequestOffers.component';
import { SendOffersComponent } from './vendor/Components/SendOffers/SendOffers.component';
import { RateServiceComponent } from './customer/Components/RateService/RateService.component';

const routes: Routes = [
	{ path: "", component: HomePageComponent },
	{ path: "index", component: HomePageComponent },
	{ path: "home", component: HomePageComponent },
	{
		path: "", component: LayoutComponent, children: [
			{ path: "profile", component: ProfileComponent },
			{ path: "requests", component: RequestComponent },
			{ path: "offers/:id", component: RequestOffersComponent },
			{ path: "bids", component: SendOffersComponent },
			{ path: "rate-service/:id", component: RateServiceComponent },
		]
	},


	{ path: '**', component: NotFoundComponent }
];

@NgModule( {
	imports: [RouterModule.forRoot( routes )],
	exports: [RouterModule]
} )
export class AppRoutingModule { }
