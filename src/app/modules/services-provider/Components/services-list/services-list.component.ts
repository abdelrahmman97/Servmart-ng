import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { IService } from 'src/app/core/models/Service/IService';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';

@Component( {
	selector: 'app-services-list',
	templateUrl: './services-list.component.html',
	styleUrls: [ './services-list.component.css' ]
} )
export class ServicesListComponent implements OnInit {

	// TODO(abdo tiba): Add edit functionality when user click on edit
	constructor (
		private servicesService: ServiceService,
		private toastr: ToastrService,
		private auth: AuthService
	) { }

	services: IService[] = [];

	loading: boolean;
	currentPage: number = 1;
	pageSize: number = 3;
	totalRequestItems: number = 0;

	fakeArray = new Array( this.pageSize );


	ngOnInit () {
		this.getServices( this.currentPage, this.pageSize );
	}

	getServices ( page: number, pageSize: number ) {
		this.servicesService.getUserServiceById( this.auth.getUserValue().userID, page, pageSize ).subscribe(
			next => {
				this.services = next as IService[];
				console.log( "🚀 this.services:", this.services )
			}
		);
	}

	deleteService ( id: string ) {
		// TODO: add delete functionlaity
		throw new Error( "Delete service methof Not Implemented!" );

	}

	pageChanged ( event: any ) {
		this.currentPage = event;
		this.getServices( this.currentPage, this.pageSize );
	}


}
