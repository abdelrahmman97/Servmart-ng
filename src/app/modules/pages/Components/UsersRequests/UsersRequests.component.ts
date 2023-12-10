import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICity } from 'src/app/core/models/Address/ICity';
import { IGovernorate } from 'src/app/core/models/Address/IGovernorate';
import { IUsersRequests } from 'src/app/core/models/Request/IUsersRequests';
import { IRequestServiceCategory } from 'src/app/core/models/RequestServiceCategory/IServiceCategory';
import { RequestService } from 'src/app/modules/customer/services/Request/Request.service';
import { AddressService } from 'src/app/shared/services/Address/Address.service';
import { RequestServiceCategoriesService } from 'src/app/shared/services/RequestAndServiceCategories/RequestServiceCategories.service';

@Component( {
	selector: 'app-UsersRequests',
	templateUrl: './UsersRequests.component.html',
	styleUrls: [ './UsersRequests.component.css' ]
} )
export class UsersRequestsComponent implements OnInit {

	constructor (
		private reqService: RequestService,
		private toastr: ToastrService,
		private address: AddressService,
		private category: RequestServiceCategoriesService,
	) { }

	loading: boolean;
	currentPage: number = 1;
	pageSize: number = 3;
	totalRequestItems: number = 0;
	usersRequestsList: IUsersRequests[] = [];
	CitiesList: ICity[] | null = null;
	GovernoratesList: IGovernorate[] | null = null;
	CategoriesList: IRequestServiceCategory[] | null = null;

	fakeArray = new Array( this.pageSize );

	requestsStatus: number = 0;

	ngOnInit () {

		// get total items of requests
		this.reqService.getTotalUsersRequests().subscribe(
			next => {
				this.totalRequestItems = next as number;
				console.log( `req`, this.totalRequestItems );
			}
		);

		this.getRequests( this.currentPage, this.pageSize, this.requestsStatus );

		this.address.getAllGovernorates().subscribe(
			next => {
				this.GovernoratesList = next as IGovernorate[];
				console.log( this.GovernoratesList );
			},
			error => {
				// this.toastr.error( 'خطأ في عرض المحافظات' )
			}
		);

		this.category.getAllCategories().subscribe(
			next => {
				this.CategoriesList = next as IRequestServiceCategory[];
				console.log( this.CategoriesList );
			}
		);
	}

	getCities ( event: any ) {
		this.CitiesList = this.GovernoratesList[ event.target.value - 1 ].city;
	}

	pageChanged ( event: any ) {
		this.currentPage = event;
		this.getRequests( this.currentPage, this.pageSize, this.requestsStatus );
	}

	getRequests ( page: number, pageSize: number, status: number ) {
		this.loading = true;
		this.reqService.getAllRequests( page, pageSize, status ).subscribe(
			next => {
				this.usersRequestsList = next as IUsersRequests[];
				this.loading = false;
				console.log( next );
			},
			error => {
				this.toastr.error( error )
				this.loading = false;
			}
		);
	}

}
