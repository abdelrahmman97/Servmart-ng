import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRequest } from 'src/app/core/models/IRequest';

@Injectable( {
	providedIn: 'root'
} )
export class ServiceRequestService {

	baseURL = "http://localhost:3000/Request";

	private request?: IRequest = {} as IRequest;
	private requestsList?: IRequest[] = [];

	constructor( private httpClient: HttpClient ) { }

	getAllUserRequests() {
		return this.httpClient.get<IRequest[]>( this.baseURL );
	}

	// getRequestCategory( name: string ): string {
	// 	const category = this.CategoriesList.find( item => item.name == name );
	// 	if ( category == undefined ) {
	// 		return this.category;
	// 	}
	// 	return category.name;
	// }
}
