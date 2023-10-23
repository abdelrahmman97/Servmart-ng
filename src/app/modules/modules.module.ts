import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { VendorModule } from './vendor/vendor.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesProviderModule } from './services-provider/services-provider.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { CoreModule } from '../core/core.module';
import { ModulesRoutingModule } from './modules-routing.module';
import { ShopComponent } from './pages/shop/shop.component';
import { DetailsComponent } from './pages/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './pages/services/services.component';
import { RatingComponent } from '../shared/Components/Rating/Rating.component';
import { SharedModule } from '../shared/shared.module';

@NgModule( {
	declarations: [
		HomePageComponent,
		ProfileComponent,
		ShopComponent,
		DetailsComponent,
		ServicesComponent
	],
	imports: [
		CommonModule,
		ModulesRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		CoreModule,
		AdminModule,
		CustomerModule,
		SharedModule,

		VendorModule,
		ServicesProviderModule,
	],
} )
export class ModulesModule { }
