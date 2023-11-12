import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../../modules/auth/services/auth/Auth.service';

@Injectable( {
	providedIn: 'root'
} )
export class adminGuard implements CanActivate {

	constructor ( private authService: AuthService, private router: Router ) { }

	canActivate (): boolean {
		if ( this.authService.isUserLoggedInAdmin() ) {
			return true;
		} else {
			this.router.navigate( [ '/access-denied' ] );
			return false;
		}
	}
}
