import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { NotificationComponent } from './Components/notification/notification.component';
import { UserDropdownComponent } from './Components/user-dropdown/user-dropdown.component';
import { NavSearchComponent } from './Components/nav-search/nav-search.component';


@NgModule({
	declarations: [
		HeaderComponent,
		NotificationComponent,
		UserDropdownComponent,
		NavSearchComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		HeaderComponent
	]
})
export class SharedModule { }
