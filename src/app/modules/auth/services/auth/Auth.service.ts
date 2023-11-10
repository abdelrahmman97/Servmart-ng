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

	private submitted = new BehaviorSubject<boolean>( false );
	data = this.submitted.asObservable();

	constructor
		(
			private authClient: AuthenticationClient,
			private router: Router,
			private toastr: ToastrService
		) {
		this.userSubject = new BehaviorSubject( this.getUserFromLocalStorage()! );
		this.user = this.userSubject.asObservable();
	}

	setSubmitted = ( newValue: boolean ) => this.submitted.next( newValue );

	login ( user: IUserLogIn ): void {
		this.submitted.next( true );
		this.authClient.login( user ).subscribe(
			( data ) => {
				this.updateUserInLocalStorage( data );
				this.userSubject.next( data as ILoginResualtModel );
				this.router.navigate( [ '/' ] );
			},
			( error ) => {
				let msg = "لقد حدث خطأ غير معروف";
				if ( error.error == "Email or Password is incorrect" ) {
					msg = "البريد الالكتروني او كلمة المرور غير صحيحة";
				}
				else {
					msg = error.error;
				}
				console.log( error );
				this.toastr.error( msg, "خطأ" )
				this.submitted.next( false );
				return error;
			}
		);
	}

	register ( user: IUserRegister ): void {
		this.submitted.next( true );
		this.authClient.register( user ).subscribe(
			( data ) => {
				localStorage.setItem( this.AuthModel, JSON.stringify( data ) );
				this.userSubject.next( data as ILoginResualtModel );
				this.router.navigate( [ '/' ] );
			},
			( error ) => {
				this.toastr.error( error.error, "خطأ" )
				console.log( error );
				this.submitted.next( false );
			}
		);
	}

	logOut () {
		localStorage.removeItem( this.AuthModel );
		this.userSubject.next( null );
		this.router.navigate( [ '/auth/login' ] );
	}

	isLoggedIn (): boolean {
		if ( this.userSubject.value != null ) {
			return this.userSubject.value.token != null && this.userSubject.value.token.length > 0;
		}
		else {
			return false;
		}
	}

	getToken () {
		return this.isLoggedIn() ? this.userSubject.value.token : null;
	}

	getUserSubject = () => this.userSubject;
	getUserAsObservable = () => this.userSubject.asObservable();
	getUserValue = () => this.userSubject.value;
	getRole = () => this.isLoggedIn() ? this.userSubject.value.role : [];

	private getUserFromLocalStorage = () => JSON.parse( localStorage.getItem( this.AuthModel ) );
	public updateUserInLocalStorage = ( data ) => localStorage.setItem( this.AuthModel, JSON.stringify( data ) );

	// Cehck user type ============================================================================

	isCustomer (): boolean {
		if ( this.getRole().includes( Role.Customer ) )
			return true;
		else
			return false;
	}

	isVendor (): boolean {
		if ( this.getRole().includes( Role.Vendor ) )
			return true;
		else
			return false;
	}

	isAdmin (): boolean {
		if ( this.getRole().includes( Role.Admin ) )
			return true;
		else
			return false;
	}

	isServiceProvider (): boolean {
		if ( this.getRole().includes( Role.ServiceProvider ) )
			return true;
		else
			return false;
	}

}
