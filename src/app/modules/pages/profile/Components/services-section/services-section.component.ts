import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/modules/services-provider/services/service.service';

@Component( {
	selector: 'profile-services-section',
	templateUrl: './services-section.component.html',
	styleUrls: [ './services-section.component.css' ]
} )
export class ServicesSectionComponent implements OnInit {

	constructor (
		private serService: ServiceService,
		private toastr: ToastrService,
	) { }

	@Input() userId;
	servicesList: any[] = [];

	loading: boolean;
	currentPage: number = 1;
	pageSize: number = 3;
	totalItems: number = 0;

	ngOnInit () {
		// get total items of user rate rows
		this.serService.GetTotalUserRatesCount( this.userId ).subscribe(
			next => {
				this.totalItems = next as number;
				console.log( `total items`, this.totalItems );
			}
		);

		this.GetServices( this.userId, this.currentPage, this.pageSize );
	}

	pageChanged ( event: any ) {
		this.currentPage = event;
		this.GetServices( this.userId, this.currentPage, this.pageSize );
	}

	GetServices ( userId: string, page: number, pageSize: number ) {
		this.loading = true;
		this.serService.getUserServiceById( userId, page, pageSize ).subscribe( {
			next: ( data ) => {
				this.servicesList = data as any;
				console.log( "🚀 ~ servicesList next:", this.servicesList )
			},
			error: ( error ) => {
				console.log( "🚀 ~ servicesList error:", error )
				this.toastr.error( error.error )
			}
		} );
		// this.serService.getServicesProviders( page, pageSize ).subscribe(
		// 	next => {
		// 		console.log( 'next', next );
		// 		this.servicesList = next as any[];
		// 		this.loading = false;
		// 	},
		// 	error => {
		// 		console.log( 'error', error );
		// 		this.toastr.error( error.error )
		// 	}
		// );
	}

}
