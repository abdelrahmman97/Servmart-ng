import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/core/environments/environment';

@Injectable( {
	providedIn: 'root'
} )
export class RequestsOrdersService {

	constructor ( private httpClient: HttpClient ) { }

	GetRequestOrders ( providedId: string ) {
		return this.httpClient.get( `${ environment.apiUrl }/Request/GetServiceProviderOrders?providerId=${ providedId }` )
	}

	getTotalRequestsOrders ( userID: string ) {
		return this.httpClient.get( `${ environment.apiUrl }/Request/GetProviderOrdersCount?providerId=${ userID }` )
	}
}
