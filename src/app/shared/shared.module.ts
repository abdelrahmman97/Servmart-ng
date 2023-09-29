import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './Components/header/header.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { UserDropdownComponent } from './Components/user-dropdown/user-dropdown.component';
import { NavSearchComponent } from './Components/nav-search/nav-search.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';


@NgModule( {
	declarations: [
		HeaderComponent,
		NotificationComponent,
		UserDropdownComponent,
		NavSearchComponent,
		ProfileComponent,
		NotFoundComponent,
  LayoutComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		HeaderComponent
	]
} )
export class SharedModule { }
