import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';

@Injectable( {
	providedIn: 'root'
} )
export class userLogedInGuard implements CanActivate {

	constructor ( private authService: AuthService, private router: Router ) { }

	canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
		const user = this.authService.isLoggedIn();
		if ( user ) {
			return true;
		}
		this.router.navigate( [ '/auth/login' ] );
		return false;
	}
};
