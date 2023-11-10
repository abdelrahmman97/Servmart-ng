import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/core/environments/environment';
import { IUsersRequests } from 'src/app/core/models/Request/IUsersRequests';

@Injectable( {
	providedIn: 'root'
} )
export class RequestService {

	constructor( private httpClient: HttpClient ) { }

	create( request: FormData ) {
		return this.httpClient.post( `${environment.apiUrl}/Request/Create`, request );
	}

	getTotalUsersRequests() {
		return this.httpClient.get<number>( `${environment.apiUrl}/Request/GetRequestCount` );
	}

	getAllUsersRequests( page: number, pageSize: number ) {
		return this.httpClient.get<IUsersRequests[]>( `${environment.apiUrl}/Request/GetAll?page=${page}&pageSize=${pageSize}` );
	}

	getRequest( id: string ) {

	}

	// getRequestCategory( name: string ): string {
	// 	const category = this.CategoriesList.find( item => item.name == name );
	// 	if ( category == undefined ) {
	// 		return this.category;
	// 	}
	// 	return category.name;
	// }
}
