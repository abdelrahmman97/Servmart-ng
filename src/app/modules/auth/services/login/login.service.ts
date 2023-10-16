import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser';

@Injectable( {
	providedIn: 'root'
} )
export class LoginService {

	private baseURL = "http://localhost:3000/User";

	constructor( private http: HttpClient ) { }

	login( user: any ) {
		// return this.http.post<IUser>( this.baseURL, user );
		return this.http.get( this.baseURL + `?PasswordHash=${user.password}&Email=${user.email}` );
	}

	getUserByToken( token: string ) {
		return this.http.get<IUser>( `${this.baseURL}?token=${token}` );
	}

	public setCookie( name, value, expiresDays ) {
		const d = new Date();
		d.setTime( d.getTime() + ( expiresDays * 24 * 60 * 60 * 1000 ) );
		let expires = "expires=" + d.toUTCString();
		document.cookie = name + "=" + value + ";" + expires + ";path=/";
	}

}
