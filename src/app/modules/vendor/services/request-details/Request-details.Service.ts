
import { Injectable, OnInit } from '@angular/core';

import { IRequest } from 'src/app/core/models/IRequest';

import { HttpClient } from '@angular/common/http';

@Injectable( {
	providedIn: 'root'
} )
export class requestdetails {

	baseURL = "http://localhost:3000/Request";
	private requestdeytails?: IRequest[] = [];

	constructor ( private Htt: HttpClient ) {

	}
	getall ( int ) {
		return this.Htt.get<IRequest[]>( this.baseURL );
	}

}


