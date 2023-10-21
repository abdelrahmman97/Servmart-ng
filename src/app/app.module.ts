import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './modules/auth/helpers/token.interceptor';


@NgModule( {
	declarations: [
		AppComponent,

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
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
} )
export class AppModule { }
