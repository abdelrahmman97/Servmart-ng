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
import { NgxPaginationModule } from 'ngx-pagination'
import { ToastNoAnimationModule } from 'ngx-toastr';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AdminModule } from './modules/admin/admin.module';
// import { LoadingBarModule } from '@ngx-loading-bar/core';
// import { LoadingBarRouterModule } from '@ngx-loading-bar/router';


@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule,
		NgxPaginationModule,
		CoreModule,
		SharedModule,
		ModulesModule,
		AdminModule,
		ToastNoAnimationModule.forRoot(
			{
				timeOut: 10000,
				positionClass: 'toast-bottom-right',
				preventDuplicates: false,
				progressBar: true,
				closeButton: true
			}
		),

		// for ngx loading bar
		LoadingBarHttpClientModule,
		// LoadingBarRouterModule,
		// LoadingBarModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
