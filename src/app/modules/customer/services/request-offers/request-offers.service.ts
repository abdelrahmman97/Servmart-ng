import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/core/environments/environment';

@Injectable( {
	providedIn: 'root'
} )
export class RequestOffersService {

	constructor(
		private httpClient: HttpClient
	) { }

	acceptOffer( offerId: string ) {
		return this.httpClient.get( `${environment.apiUrl}/RequestOffer/AcceptOffer?offerId=${offerId}` )
	}

	rejectOffer( offerId: string ) {
		return this.httpClient.get( `${environment.apiUrl}/RequestOffer/RejectOffer?offerId=${offerId}` )
	}
}
