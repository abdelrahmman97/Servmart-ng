import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/app/core/environments/environment';

@Injectable( {
	providedIn: 'root'
} )
export class AddressService {

	constructor ( private httpClient: HttpClient, private toastr: ToastrService ) { }

	getAllGovernorates () {
		return this.httpClient.get( `${ environment.apiUrl }/Address/GetAllGovernorates` );
	}

	getGovernorateById ( id: number ) {
		return this.httpClient.get( `${ environment.apiUrl }/Address/GetGovernorateById/${ id }` );
	}

}
