import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingspinnerComponent } from './loadingspinner/loadingspinner.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS,} from '@angular/common/http';
import { TokenInterceptor } from './modules/auth/helpers/token.interceptor';
 import { MatProgressBarModule} from '@angular/material/progress-bar'


@NgModule( {
	declarations: [
		AppComponent,

    LoadingspinnerComponent


	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		ModulesModule,
		CoreModule,
		SharedModule,
		NgxSpinnerModule,
		CoreModule,
		SharedModule,

		ModulesModule,
		MatProgressBarModule

	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
} )
export class AppModule { }
