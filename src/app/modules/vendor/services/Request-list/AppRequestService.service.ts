import { Injectable, OnInit } from '@angular/core';

import { IRequest } from 'src/app/core/models/IRequest';

import { HttpClient } from '@angular/common/http';

@Injectable( {
	providedIn: 'root'
} )
export class addRequestService {
	baseURL = "http://localhost:3000/Request";

	private request?: IRequest = {} as IRequest;


	constructor ( private httpClient: HttpClient ) { }

	getAllUserRequests () {
		return this.httpClient.get<IRequest[]>( this.baseURL );
	}

	gitone ( id: number ) {
		return this.httpClient.get<IRequest>( `${ this.baseURL }?ID=${ id }` );


	}
}
