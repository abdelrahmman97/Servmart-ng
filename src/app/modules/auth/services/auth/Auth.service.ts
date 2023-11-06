import { Injectable } from '@angular/core';
import { AuthenticationClient } from '../../helpers/authentication.client';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUserLogIn } from 'src/app/core/models/User/IUserLogIn';
import { IUserRegister } from 'src/app/core/models/User/IUserRegister';
import { ToastrService } from 'ngx-toastr';
import { ILoginResualtModel } from 'src/app/core/models/Auth/ILoginResualtModel';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
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
		this.userSubject = new BehaviorSubject(this.getUserFromLocalStorage()!);
		this.user = this.userSubject.asObservable();
	}

	login(user: IUserLogIn): void {
		this.authClient.login(user).subscribe(
			(data) => {
				localStorage.setItem(this.AuthModel, JSON.stringify(data))
				this.userSubject.next(data as ILoginResualtModel);
				this.router.navigate(['/']);
				console.log(data);
			},
			(error) => {
				let msg = "لقد حدث خطأ غير معروف";
				if (error.error == "Email or Password is incorrect") {
					msg = "البريد الالكتروني او كلمة المرور غير صحيحة";
				}
				else {
					msg = error.statusText;
					console.log(error);
				}
				this.toastr.error(error, "خطأ")
				return error;
			}
		);
	}

	register(user: IUserRegister): void {
		this.authClient.register(user).subscribe(
			(data) => {
				localStorage.setItem(this.AuthModel, JSON.stringify(data));
				this.router.navigate(['/']);
			},
			(error) => {
				this.toastr.error(error.error, "خطأ")
			}
		);
	}

	logOut() {
		localStorage.removeItem(this.AuthModel);
		this.userSubject.next(null);
		this.router.navigate(['/auth/login']);
	}

	isLoggedIn(): boolean {
		let user = JSON.parse(localStorage.getItem(this.AuthModel));
		if (user != null) {
			return user.token != null && user.token.length > 0;
		}
		else {
			return null;
		}
	}

	getToken() {
		let user = JSON.parse(localStorage.getItem(this.AuthModel));
		return this.isLoggedIn() ? user.token : null;
	}

	getUser = () => this.userSubject.value;

	private getUserFromLocalStorage = () => JSON.parse(localStorage.getItem(this.AuthModel));



	// UPDATE - user type check

	isCustomer(): boolean {

		const item = localStorage.getItem('Role');
		if (JSON.parse(item) == 0)
			return true;
		else
			return false;

	}
	isVendor(): boolean {
		const item = localStorage.getItem('Role');
		if (JSON.parse(item) == 1)
			return true;
		else
			return false;
	}
	isAdmin(): boolean {
		const item = localStorage.getItem('Role');
		if (JSON.parse(item) == 3)
			return true;
		else
			return false;
	}
	isserviceprovider(): boolean {
		const item = localStorage.getItem('Role');
		if (JSON.parse(item) == 2)
			return true;
		else
			return false;
	}

}
