import { Component } from '@angular/core';
import { ServiceService } from 'src/app/modules/services-provider/services/service.service';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/shared/services/Address/Address.service';
import { RequestServiceCategoriesService } from 'src/app/shared/services/RequestAndServiceCategories/RequestServiceCategories.service';
import { IService } from 'src/app/core/models/Service/IService';
import { ICity } from 'src/app/core/models/Address/ICity';
import { IGovernorate } from 'src/app/core/models/Address/IGovernorate';
import { IRequestServiceCategory } from 'src/app/core/models/RequestServiceCategory/IServiceCategory';
import { IServicesProviders } from 'src/app/core/models/Service/IServicesProviders';

@Component( {
	selector: 'app-search-vendors',
	templateUrl: './search-vendors.component.html',
	styleUrls: [ './search-vendors.component.css' ]
} )

export class SearchVendorsComponent {

	constructor (
		private serService: ServiceService,
		private toastr: ToastrService,
		private address: AddressService,
		private category: RequestServiceCategoriesService,
	) { }

	searchInput: string = '';
	loading: boolean;
	currentPage: number = 1;
	pageSize: number = 3;
	totalRequestItems: number = 0;
	servicesProviders: IServicesProviders[] = [];
	CitiesList: ICity[] | null = null;
	GovernoratesList: IGovernorate[] | null = null;
	CategoriesList: IRequestServiceCategory[] | null = null;

	fakeArray = new Array( this.pageSize );

	ngOnInit () {
		// get total items of service providers
		this.serService.getTotalServicesProviders().subscribe(
			next => {
				this.totalRequestItems = next as number;
				console.log( `services`, this.totalRequestItems );
			}
		);

		this.getServicesProviders( this.currentPage, this.pageSize );

		this.address.getAllGovernorates().subscribe(
			next => {
				this.GovernoratesList = next as IGovernorate[];
				console.log( this.GovernoratesList );
			},
			error => {
				this.toastr.error( 'خطأ في عرض المحافظات' )
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
		this.getServicesProviders( this.currentPage, this.pageSize );
	}

	getServicesProviders ( page: number, pageSize: number ) {
		this.loading = true;
		this.serService.getServicesProviders( page, pageSize ).subscribe(
			next => {
				console.log( 'next', next );
				this.servicesProviders = next as IServicesProviders[];
				this.loading = false;
			},
			error => {
				console.log( 'error', error );
				this.toastr.error( error.error )
			}
		);
	}


	// TODO(abdo tiba): To be deleted or fixed
	onInputChange (): void {
		console.log( 'Input Value:', this.searchInput );
	}
	onSearch (): void {
		console.log( 'Input Value:', this.searchInput );

	}
	selectedOption: string;

	onOptionChange (): void {
		console.log( 'Selected Option:', this.selectedOption );
		// Perform actions based on the selected option
	}



}



