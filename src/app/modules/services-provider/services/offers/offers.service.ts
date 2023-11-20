import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OfferStatus } from 'src/app/core/Enums/OfferStatus.enum';
import { environment } from 'src/app/core/environments/environment';

@Injectable( {
	providedIn: 'root'
} )
export class OffersService {

	constructor
		(
			private httpClient: HttpClient,
			private toastr: ToastrService
		) { }

	create( offer: any ) {
		return this.httpClient.post( `${environment.apiUrl}/RequestOffer/CreateOffer`, offer );
	}

	update( offer: any ) {
		return this.httpClient.post( `${environment.apiUrl}/RequestOffer/update`, offer );
	}

	delete() { }

	setAsCompleted( offerId: string ) {
		return this.httpClient.get( `${environment.apiUrl}/RequestOffer/CompleteOffer?offerId=${offerId}` );
	}

	archiveOffer( offerId: string ) {
		return this.httpClient.get( `${environment.apiUrl}/RequestOffer/ArchiveOffer?offerId=${offerId}` );
	}

	listUserRequestOffers( requestId: string, page: number, pageSize: number ) {
		return this.httpClient.get( `${environment.apiUrl}/RequestOffer/GetUserRequestOffers?requestID=${requestId}&page=${page}&pageSize=${pageSize}` );
	}

	userRequestOffersCount( requestId: string ) {
		return this.httpClient.get( `${environment.apiUrl}/RequestOffer/UserRequestOffersCount?requestId=${requestId}` );
	}

	listProviderOffersByStatus( status: OfferStatus, page: number, pageSize: number ) {
		return this.httpClient.get( `${environment.apiUrl}/RequestOffer/GetProviderOffersByStatus?status=${status}&page=${page}&pageSize=${pageSize}` );
	}

	providerOffersByStatusCount( status: OfferStatus ) {
		return this.httpClient.get( `${environment.apiUrl}/RequestOffer/ProviderOffersByStatusCount?status=${status}` );
	}
}

