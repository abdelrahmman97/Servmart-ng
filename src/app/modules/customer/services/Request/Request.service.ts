import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/core/environments/environment';
import { IUsersRequests } from 'src/app/core/models/Request/IUsersRequests';

@Injectable( {
	providedIn: 'root'
} )
export class RequestService {

	constructor ( private httpClient: HttpClient ) { }

	create ( request: FormData ) {
		return this.httpClient.post( `${ environment.apiUrl }/Request/Create`, request );
	}

	getTotalUsersRequests () {
		return this.httpClient.get<number>( `${ environment.apiUrl }/Request/GetRequestCount` );
	}

	getAllRequests ( page: number, pageSize: number, status: number ) {
		return this.httpClient.get<IUsersRequests[]>( `${ environment.apiUrl }/Request/GetAll?page=${ page }&pageSize=${ pageSize }&status=${ status }` );
	}

	getUsersRequests ( userId: string, status: number, page: number, pageSize: number ) {
		return this.httpClient.get( `${ environment.apiUrl }/Request/GetUserRequestsById?userId=${ userId }&status=${ status }&page=${ page }&pageSize=${ pageSize }` );
	}

	GetUserRequestsCountById ( userId: string, status: number ) {
		return this.httpClient.get( `${ environment.apiUrl }/Request/GetUserRequestsCountById?userId=${ userId }&status=${ status }` );
	}

	getRequestById ( requestId: string ) {
		return this.httpClient.get( `${ environment.apiUrl }/Request/GetRequestById?requestId=${ requestId }` );
	}

	// getRequestCategory( name: string ): string {
	// 	const category = this.CategoriesList.find( item => item.name == name );
	// 	if ( category == undefined ) {
	// 		return this.category;
	// 	}
	// 	return category.name;
	// }
}
