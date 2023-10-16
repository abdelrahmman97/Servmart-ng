import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './modules/vendor/Components/order-details/order-details.component';


@NgModule( {
	declarations: [
		AppComponent,
		OrderDetailsComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule,

		CoreModule,
		SharedModule,
		ModulesModule,

	],
	providers: [],
	bootstrap: [AppComponent]
} )
export class AppModule { }
