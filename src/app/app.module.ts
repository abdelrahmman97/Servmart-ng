import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './modules/vendor/Components/order-details/order-details.component';
import { LoadingspinnerComponent } from './loadingspinner/loadingspinner.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
=======
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './modules/auth/helpers/token.interceptor';
import {NgxPaginationModule} from 'ngx-pagination'

>>>>>>> origin/main

@NgModule( {
	declarations: [
		AppComponent,

<<<<<<< HEAD
		OrderDetailsComponent,
    LoadingspinnerComponent

=======
>>>>>>> origin/main
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule,
<<<<<<< HEAD
		BrowserAnimationsModule,
		ModulesModule,
		CoreModule,
		SharedModule,
		NgxSpinnerModule
=======
NgxPaginationModule,
		CoreModule,
		SharedModule,
		ModulesModule,

	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
>>>>>>> origin/main
	],
	bootstrap: [AppComponent]
} )
export class AppModule { }
