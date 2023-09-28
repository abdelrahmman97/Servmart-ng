import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { VendorModule } from './vendor/vendor.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { AddedComponent } from './added/added.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CartComponent } from './cart/cart.component';
import { ListComponent } from './list/list.component';
import { RequestsComponent } from './requests/requests.component';
import { SearchVendorsComponent } from './search-vendors/search-vendors.component';
import { SeeCustomerrRequestComponent } from './see-customerr-request/see-customerr-request.component';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
  AddedComponent,
  CheckOutComponent,
  CartComponent,
  ListComponent,
  RequestsComponent,
  SearchVendorsComponent,
  SeeCustomerrRequestComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CustomerModule,
		VendorModule,
		AuthModule,
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
