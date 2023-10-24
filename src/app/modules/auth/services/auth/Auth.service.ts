import { Injectable } from '@angular/core';
import { AuthenticationClient } from '../../helpers/authentication.client';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUserLogIn } from 'src/app/core/models/User/IUserLogIn';
import { IUserRegister } from 'src/app/core/models/User/IUserRegister';

@Injectable( {
	providedIn: 'root'
} )
export class AuthService {

	private tokenKey = 'token';

	constructor
		(
			private authClient: AuthenticationClient,
			private http: HttpClient, private router: Router
		) { }

	login( user: IUserLogIn ): void {
		this.authClient.login( user ).subscribe(
			( token ) => {
				let data = token as any;
				localStorage.setItem( this.tokenKey, JSON.stringify( data[0].token ) )
				this.router.navigate( ['/'] );
				console.log( token );
			},
			( error ) => {
				console.log(error);
				return error;
			}
		);
	}

	register( user: IUserRegister ): void {
		this.authClient.register( user ).subscribe(
			( token ) => {
				localStorage.setItem( this.tokenKey, JSON.stringify( token ) );
				this.router.navigate( ['/'] );
			}
		);
	}

	logOut() {
		localStorage.removeItem( this.tokenKey );
		this.router.navigate( ['/auth/login'] );
	}

	isLoggedIn(): boolean {
		let token = localStorage.getItem( this.tokenKey );
		return token != null && token.length > 0;
	}

	getToken() {
		return this.isLoggedIn() ? localStorage.getItem( this.tokenKey ) : null;
	}


	// UPDATE - user type check

	isCustomer(): boolean {

		const item = localStorage.getItem( 'Role' );
		if ( JSON.parse( item ) == 0 )
			return true;
		else
			return false;

	}
	isVendor(): boolean {
		const item = localStorage.getItem( 'Role' );
		if ( JSON.parse( item ) == 1 )
			return true;
		else
			return false;
	}
	isAdmin(): boolean {
		const item = localStorage.getItem( 'Role' );
		if ( JSON.parse( item ) == 3 )
			return true;
		else
			return false;
	}
	isserviceprovider(): boolean {
		const item = localStorage.getItem( 'Role' );
		if ( JSON.parse( item ) == 2 )
			return true;
		else
			return false;
	}

}
