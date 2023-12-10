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
import { SharedModule } from '../shared/shared.module';
import { UsersRequestsComponent } from './pages/Components/UsersRequests/UsersRequests.component';
import { AboutSectionComponent } from './pages/profile/Components/about-section/about-section.component';
import { PreviousWorksSectionComponent } from './pages/profile/Components/previous-works-section/previous-works-section.component';
import { ReviewsSectionComponent } from './pages/profile/Components/reviews-section/reviews-section.component';
import { ServicesSectionComponent } from './pages/profile/Components/services-section/services-section.component';
import { RequestDerailsComponent } from './pages/Components/request-derails/request-derails.component';


@NgModule( {
	declarations: [
		HomePageComponent,
		// profile & profile sections
		ProfileComponent,
		AboutSectionComponent,
		PreviousWorksSectionComponent,
		ReviewsSectionComponent,
		ServicesSectionComponent,
		// ===============================
		ShopComponent,
		DetailsComponent,
		MinLengthPipe,
		UsersRequestsComponent,
		RequestDerailsComponent
	],
	imports: [
		CommonModule,
		NgxPaginationModule,
		ModulesRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		CoreModule,
		CustomerModule,
		SharedModule,
		VendorModule,
		ServicesProviderModule,
	],
} )
export class ModulesModule { }
