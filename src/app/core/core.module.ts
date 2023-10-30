import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule} from '@angular/material/progress-bar'

import { LayoutComponent } from './components/layout/layout.component';
import { NavSearchComponent } from './components/nav-search/nav-search.component';
import { NotificationComponent } from './components/notification/notification.component';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BottomSidebarComponent } from './components/BottomSidebar/BottomSidebar.component';
import { CustomCurrencyPipe } from './Pipes/CustomCurrency.pipe';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';


@NgModule({
	declarations: [
		// Pages
		NotFoundComponent,

		// Components
		LayoutComponent,
		HeaderComponent,
		NavSearchComponent,
		NotificationComponent,
		UserDropdownComponent,
		SidebarComponent,
		BottomSidebarComponent,


		// Pipes
		CustomCurrencyPipe,

	],
	imports: [
		CommonModule,
		RouterModule,
		MatProgressBarModule,
		LoadingBarHttpClientModule,
		LoadingBarRouterModule
	],
	exports: [
		HeaderComponent,
		CustomCurrencyPipe
	]
})
export class CoreModule { }
