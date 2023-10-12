import { Injectable, OnInit } from '@angular/core';

import { IRequest } from 'src/app/core/models/irequest';

import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
  })
export class addRequestService  {
	baseURL = "http://localhost:3000/Request";

	private request?: IRequest = {} as IRequest;
	private requestsList?: IRequest[] = [];

	constructor( private httpClient: HttpClient ) { }

	getAllUserRequests() {
		return this.httpClient.get<IRequest[]>( this.baseURL );
	}
    gitone(id: number){
		if(id==0)
		return false;
	    return this.requestsList.find(R=>R.ID)

	}
}
