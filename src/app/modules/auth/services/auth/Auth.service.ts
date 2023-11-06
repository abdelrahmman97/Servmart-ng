import { Injectable } from '@angular/core';
import { AuthenticationClient } from '../../helpers/authentication.client';
import { Router } from '@angular/router';
import { IUserLogIn } from 'src/app/core/models/User/IUserLogIn';
import { IUserRegister } from 'src/app/core/models/User/IUserRegister';
import { ToastrService } from 'ngx-toastr';
import { ILoginResualtModel } from 'src/app/core/models/Auth/ILoginResualtModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { Role } from 'src/app/core/Enums/Role.enum';

@Injectable( {
	providedIn: 'root'
} )
export class AuthService {

	private AuthModel = 'servmart.auth';
	private userSubject: BehaviorSubject<ILoginResualtModel | null>;
	public user: Observable<ILoginResualtModel | null>;

	constructor
		(
			private authClient: AuthenticationClient,
			private router: Router,
			private toastr: ToastrService
		) {
		this.userSubject = new BehaviorSubject( this.getUserFromLocalStorage()! );
		this.user = this.userSubject.asObservable();
	}

	login( user: IUserLogIn ): void {
		this.authClient.login( user ).subscribe(
			( data ) => {
				localStorage.setItem( this.AuthModel, JSON.stringify( data ) )
				this.userSubject.next( data as ILoginResualtModel );
				this.router.navigate( ['/'] );
			},
			( error ) => {
				let msg = "لقد حدث خطأ غير معروف";
				if ( error.error == "Email or Password is incorrect" ) {
					msg = "البريد الالكتروني او كلمة المرور غير صحيحة";
				}
				else {
					msg = error.statusText;
				}
				this.toastr.error( msg, "خطأ" )
				return error;
			}
		);
	}

	register( user: IUserRegister ): void {
		this.authClient.register( user ).subscribe(
			( data ) => {
				localStorage.setItem( this.AuthModel, JSON.stringify( data ) );
				this.userSubject.next( data as ILoginResualtModel );
				this.router.navigate( ['/'] );
			},
			( error ) => {
				this.toastr.error( error.error, "خطأ" )
			}
		);
	}

	logOut() {
		localStorage.removeItem( this.AuthModel );
		this.userSubject.next( null );
		this.router.navigate( ['/auth/login'] );
	}

	isLoggedIn(): boolean {
		let user = JSON.parse( localStorage.getItem( this.AuthModel ) );
		if ( user != null ) {
			return user.token != null && user.token.length > 0;
		}
		else {
			return null;
		}
	}

	getToken() {
		let user = JSON.parse( localStorage.getItem( this.AuthModel ) );
		return this.isLoggedIn() ? user.token : null;
	}

	getUser = () => this.userSubject.value;

	private getUserFromLocalStorage = () => JSON.parse( localStorage.getItem( this.AuthModel ) );

	// Cehck user type ============================================================================

	isCustomer(): boolean {
		if ( this.getUser().role.includes( Role.Customer ) )
			return true;
		else
			return false;
	}

	isVendor(): boolean {
		if ( this.getUser().role.includes( Role.Vendor ) )
			return true;
		else
			return false;
	}

	isAdmin(): boolean {
		if ( this.getUser().role.includes( Role.Admin ) )
			return true;
		else
			return false;
	}

	isServiceProvider(): boolean {
		if ( this.getUser().role.includes( Role.ServiceProvider ) )
			return true;
		else
			return false;
	}

}
