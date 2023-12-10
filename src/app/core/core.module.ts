import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { NavSearchComponent } from './components/nav-search/nav-search.component';
import { NotificationComponent } from './components/notification/notification.component';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BottomSidebarComponent } from './components/BottomSidebar/BottomSidebar.component';
import { CustomCurrencyPipe } from './Pipes/CustomCurrency/CustomCurrency.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { CustomDatePipe } from './Pipes/CustomDate/CustomDate.pipe';
import { DateFromNowPipe } from './Pipes/DateFromNow/date-from-now.pipe';
import { DateDifferencePipe } from './Pipes/Date-Difference/Date-Difference.pipe';



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
		SidebarComponent,
		BottomSidebarComponent,
		FooterComponent,

		// Pipes
		CustomCurrencyPipe,
		CustomDatePipe,
		DateFromNowPipe,
		DateDifferencePipe
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		HeaderComponent,
		UserDropdownComponent,
		FooterComponent,
		BottomSidebarComponent,
		CustomCurrencyPipe,
		CustomDatePipe,
		DateFromNowPipe,
		DateDifferencePipe
	]
} )
export class CoreModule { }
