import { Injectable } from '@angular/core';
import { AuthenticationClient } from '../../helpers/authentication.client';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUserLogIn } from 'src/app/core/models/User/IUserLogIn';
import { IUserRegister } from 'src/app/core/models/User/IUserRegister';
import { ToastrService } from 'ngx-toastr';
import { ILoginResualtModel } from 'src/app/core/models/Auth/ILoginResualtModel';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private tokenKey = 'token';
	private AuthModel = 'servmart.auth';

	constructor
		(
			private authClient: AuthenticationClient,
			private router: Router,
			private toastr: ToastrService
		) { }

	login(user: IUserLogIn): void {
		this.authClient.login(user).subscribe(
			(data) => {
				let model = data as ILoginResualtModel;
				localStorage.setItem(this.AuthModel, JSON.stringify(model))
				localStorage.setItem(this.tokenKey, JSON.stringify(model.Token))
				this.router.navigate(['/']);
				console.log(model);
			},
			(error) => {
				let msg = "لقد حدث خطأ غير معروف";
				if (error.error == "Email or Password is incorrect") {
					msg = "البريد الالكتروني او كلمة المرور غير صحيحة";
				}
				else {
					msg = error.error;
				}
				this.toastr.error(msg, "خطأ")
				return error;
			}
		);
	}

	register(user: IUserRegister): void {
		this.authClient.register(user).subscribe(
			(token) => {
				localStorage.setItem(this.tokenKey, JSON.stringify(token));
				this.router.navigate(['/']);
			}
		);
	}

	logOut() {
		localStorage.removeItem(this.AuthModel);
		this.router.navigate(['/auth/login']);
	}

	isLoggedIn(): boolean {
		let token = localStorage.getItem(this.tokenKey);
		return token != null && token.length > 0;
	}

	getToken() {
		return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
	}


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
