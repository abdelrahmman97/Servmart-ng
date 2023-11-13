import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PaginationResponse } from '../../pages/services/interfaces/PaginationResponse';
import { environment } from 'src/app/core/environments/environment';

@Injectable()
export class ServiceService {

	private apiUrl = 'https://localhost:7013/api/Service/file';
	private apiUrl2 = 'https://localhost:7013/api/Service/cat';
	private apiUrl3 = 'https://localhost:7013/api/Service/search';

	constructor ( private http: HttpClient ) { }

	createService ( service: FormData ) {
		return this.http.post( `${ environment.apiUrl }/Service/AddService`, service );
	}

	getAllServices ( page: number, pageSize: number ) {
		return this.http.get( `${ environment.apiUrl }/Service/GetAllServices?page=${ page }&pageSize=${ pageSize }` );
	}

	getUserService () {
		return this.http.get( `${ environment.apiUrl }/Service/GetUserService` );
	}

	getUserServiceById ( userId: string, page: number, pageSize: number ) {
		return this.http.get( `${ environment.apiUrl }/Service/GetUserServiceById?userId=${ userId }` );
	}

	getTotalUserServicesCount ( userId: string ) {
		return this.http.get<number>( `${ environment.apiUrl }/Service/GetUserServicesCount?id=${ userId }` );
	}

	getTotalServicesProviders () {
		return this.http.get<number>( `${ environment.apiUrl }/Service/GetTotalServicesProviders` );
	}

	getServicesProviders ( page: number, pageSize: number ) {
		return this.http.get( `${ environment.apiUrl }/Service/GetServicesProviders?page=${ page }&pageSize=${ pageSize }` );
	}

	GetUserRate ( userId: string, page: number, pageSize: number ) {
		return this.http.get( `${ environment.apiUrl }/Service/GetUserRate?userId=${ userId }&page=${ page }&pageSize=${ pageSize }` );
	}

	GetTotalUserRatesCount ( id: string ) {
		return this.http.get<number>( `${ environment.apiUrl }/Service/GetTotaUserRatesCount?id=${ id }` );
	}


	// TODO(abdo tiba): To be deleted
	getValues (): Observable<any[]> {
		return this.http.get<any[]>( this.apiUrl2 ).pipe(
			map( response => response[ '$values' ] )
		);
	}

	// TODO(abdo tiba): To be deleted
	uploadFormData ( formData: FormData ) {
		return this.http.post<any>( `${ this.apiUrl }`, formData );
	}

	// TODO(abdo tiba): To be deleted
	getItems (
		name: string,
		categoryName: string,
		expectedSalary: number,
		orderBy: string,
		isAscending: boolean,
		pageSize: number,
		pageIndex: number
	): Observable<PaginationResponse> {
		const params = {
			Name: name.toString(),
			categoryName: categoryName.toString(),
			ExpectedSalary: expectedSalary.toString(),
			OrderBy: orderBy,
			IsAscending: isAscending.toString(),
			PageSize: pageSize.toString(),
			PageIndex: pageIndex.toString()
		};

		return this.http.get<PaginationResponse>( this.apiUrl3, { params } );
	}


}
