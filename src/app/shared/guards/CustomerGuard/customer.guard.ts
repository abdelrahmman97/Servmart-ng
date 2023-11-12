import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../../modules/auth/services/auth/Auth.service';

@Injectable( {
	providedIn: 'root'
} )
export class CustomerGuard implements CanActivate {

	constructor ( private authService: AuthService, private router: Router ) { }

	canActivate (): boolean {
		if ( this.authService.isUserLoggedInCustomer() ) {
			return true;
		} else {
			this.router.navigate( [ '/access-denied' ] ); // Redirect to an access denied page
			return false;
		}
	}
}
