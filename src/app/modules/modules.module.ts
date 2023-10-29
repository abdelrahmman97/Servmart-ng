import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModule } from './admin/admin.module';
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
import { MinLengthPipe } from './pages/min-length.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServicesComponent } from './pages/services/services.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [
		HomePageComponent,
		ProfileComponent,
		ShopComponent,
		DetailsComponent,
		MinLengthPipe,
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
		NgxPaginationModule,
		SharedModule,
		VendorModule,
		ServicesProviderModule,
	],
})
export class ModulesModule { }
