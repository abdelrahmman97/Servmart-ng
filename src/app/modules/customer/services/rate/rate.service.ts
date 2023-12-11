import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/core/environments/environment';
import { IServiceRate } from 'src/app/core/models/Rate/IServiceRate';

@Injectable( {
	providedIn: 'root'
} )
export class RateService {

	constructor ( private httpClient: HttpClient ) { }

	rateService ( rate: any ) {
		return this.httpClient.post( `${ environment.apiUrl }/Rate/RateService`, rate );
	}

	rateProduct () {
		throw new Error( "rate product service method Not Implemented!" );
	}
}
