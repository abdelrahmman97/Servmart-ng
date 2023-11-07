import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/core/environments/environment';
import { ICreateRequest } from 'src/app/core/models/Request/CreateRequest';

@Injectable( {
	providedIn: 'root'
} )
export class RequestService {

	constructor ( private httpClient: HttpClient ) { }

	create ( request: FormData ) {
		return this.httpClient.post( `${ environment.apiUrl }/Request/Create`, request );
	}

	// getAllUserRequests () {
	// 	return this.httpClient.get<IRequest[]>( this.baseURL );
	// }

	// getRequestCategory( name: string ): string {
	// 	const category = this.CategoriesList.find( item => item.name == name );
	// 	if ( category == undefined ) {
	// 		return this.category;
	// 	}
	// 	return category.name;
	// }
}
