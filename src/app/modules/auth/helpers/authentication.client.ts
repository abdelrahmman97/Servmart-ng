import { environment } from "src/app/core/environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUserLogIn } from "src/app/core/models/User/IUserLogIn";
import { IUserRegister } from "src/app/core/models/User/IUserRegister";
import { catchError, throwError } from "rxjs";
import { IUser } from "src/app/core/models/User/IUser";

@Injectable( {
	providedIn: 'root',
} )
export class AuthenticationClient {
	constructor ( private http: HttpClient ) { }

	login ( user: IUserLogIn ) {
		// return this.http.post( `${environment.apiUrl}/login`, user );
		return this.http.post( `${ environment.apiUrl }/Auth/login`, user );
	}

	///api/User/register
	register ( user: IUserRegister ) {
		return this.http.post( `${ environment.apiUrl }/Auth/register`, user );
	}

}
