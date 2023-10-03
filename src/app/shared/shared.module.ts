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
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { BottomSidebarComponent } from './Components/BottomSidebar/BottomSidebar.component';


@NgModule( {
	declarations: [
		LayoutComponent,
		NotFoundComponent,
		HeaderComponent,
		NotificationComponent,
		UserDropdownComponent,
		NavSearchComponent,
		ProfileComponent,
		SidebarComponent,
		BottomSidebarComponent

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
