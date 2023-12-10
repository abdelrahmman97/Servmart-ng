import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';
import { ILoginResualtModel } from '../../models/Auth/ILoginResualtModel';

@Component( {
	selector: 'app-BottomSidebar',
	templateUrl: './BottomSidebar.component.html',
	styleUrls: [ './BottomSidebar.component.css' ]
} )
export class BottomSidebarComponent {

	isloggedIn: boolean = false;
	user?: ILoginResualtModel | null = null;
	constructor ( private auth: AuthService ) {
		this.auth.getUserAsObservable().subscribe(
			{
				next: ( data ) => {
					this.user = data;
					this.isloggedIn = ( data == null ) ? false : true;
					console.log( "user: ", data );
				}
			} );
	}

	isUserLoggedInCustomer: boolean = this.auth.isUserLoggedInCustomer();
	isUserLoggedInVendor: boolean = this.auth.isUserLoggedInVendor();
	isUserLoggedInServiceProvider: boolean = this.auth.isUserLoggedInServiceProvider();
	isUserLoggedInAdmin: boolean = this.auth.isUserLoggedInAdmin();
}
