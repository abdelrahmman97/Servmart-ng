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

@NgModule({
	declarations: [
		HomePageComponent,
		ProfileComponent,
		ShopComponent,
		DetailsComponent,
	],
	imports: [
		CommonModule,
		ModulesRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		CoreModule,
		AdminModule,
		CustomerModule,

		VendorModule,
		ServicesProviderModule,
	],
})
export class ModulesModule {}
