import { environment } from "src/app/core/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUserLogIn } from "src/app/core/models/User/IUserLogIn";
import { IUserRegister } from "src/app/core/models/User/IUserRegister";

@Injectable( {
	providedIn: 'root',
} )
export class AuthenticationClient {
	constructor( private http: HttpClient ) { }

	login( user: IUserLogIn ) {
		// return this.http.post( `${environment.apiUrl}/login`, user );
		return this.http.get( `${environment.apiUrl}/login?email=${user.email}&password=${user.password}` );
	}

	register( user: IUserRegister ) {
		return this.http.post( `${environment.apiUrl}/register`, user );
	}
}
