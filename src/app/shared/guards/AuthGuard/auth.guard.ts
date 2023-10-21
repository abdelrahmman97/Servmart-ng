import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';



@Injectable( {
	providedIn: 'root'
} )
export class authGuard implements CanActivate {

	constructor( private authService: AuthService, private router: Router ) { }

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
		if ( !this.authService.isLoggedIn() ) {
			this.router.navigate( ['/auth/login'] );
		}
		return true;
	}
}
