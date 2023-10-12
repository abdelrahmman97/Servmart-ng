import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ModulesModule } from './modules/modules.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // added
@NgModule({
	declarations: [
		AppComponent,

	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ModulesModule,
		CoreModule,
		SharedModule,
		BrowserAnimationsModule,  // added
		
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
