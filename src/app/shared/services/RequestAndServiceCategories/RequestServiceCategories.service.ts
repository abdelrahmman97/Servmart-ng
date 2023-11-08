import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/app/core/environments/environment';

@Injectable( {
	providedIn: 'root'
} )
export class RequestServiceCategoriesService {

	constructor ( private httpClient: HttpClient, private toastr: ToastrService ) { }

	getAllCategories () {
		return this.httpClient.get( `${ environment.apiUrl }/RequestServiceCategory/GetAllCategories` );
	}

	getCategoryById ( id: number ) {
		return this.httpClient.get( `${ environment.apiUrl }/RequestServiceCategory/GetCategoryById/${ id }` );
	}

}
