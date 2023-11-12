import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';
import { ILoginResualtModel } from '../../models/Auth/ILoginResualtModel';

@Component( {
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: [ './sidebar.component.css' ]
} )
export class SidebarComponent {

	user: ILoginResualtModel;
	userFullName: string;
	constructor ( private auth: AuthService ) {
		this.user = auth.getUserValue();
		this.userFullName = `${ this.user.fName } ${ this.user.lName.charAt( 0 ) }.`;
	}


	isUserLoggedInCustomer: boolean = this.auth.isUserLoggedInCustomer();
	isUserLoggedInVendor: boolean = this.auth.isUserLoggedInVendor();
	isUserLoggedInServiceProvider: boolean = this.auth.isUserLoggedInServiceProvider();
	isUserLoggedInAdmin: boolean = this.auth.isUserLoggedInAdmin();

}
