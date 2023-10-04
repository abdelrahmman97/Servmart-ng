import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { NavSearchComponent } from './components/nav-search/nav-search.component';
import { NotificationComponent } from './components/notification/notification.component';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../modules/pages/home-page/home-page.component';



@NgModule( {
	declarations: [
		// Pages
		NotFoundComponent,

		// Components
		LayoutComponent,
		HeaderComponent,
		NavSearchComponent,
		NotificationComponent,
		UserDropdownComponent,
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		HeaderComponent
	]
} )
export class CoreModule { }
