import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

	create ( offer: any ) {
		return this.httpClient.post( `${ environment.apiUrl }/RequestOffer/CreateOffer`, offer );
	}

	update ( offer: any ) {
		return this.httpClient.post( `${ environment.apiUrl }/RequestOffer/update`, offer );
	}

	delete () { }
	listOffers () { }
}
