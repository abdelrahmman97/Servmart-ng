import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/modules/services-provider/services/service.service';

@Component( {
	selector: 'profile-reviews-section',
	templateUrl: './reviews-section.component.html',
	styleUrls: [ './reviews-section.component.css' ]
} )
export class ReviewsSectionComponent implements OnInit {

	constructor (
		private serService: ServiceService,
		private toastr: ToastrService,
	) { }

	@Input() userId;
	userServicesRateList: any[] = [];

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

		this.GetUserRate( this.userId, this.currentPage, this.pageSize );
	}

	pageChanged ( event: any ) {
		this.currentPage = event;
		this.GetUserRate( this.userId, this.currentPage, this.pageSize );
	}

	GetUserRate ( userId: string, page: number, pageSize: number ) {
		this.loading = true;
		this.serService.GetUserRate( this.userId, page, pageSize ).subscribe( {
			next: ( data ) => {
				console.log( 'next rates', data );
				this.userServicesRateList = data as any[];
				this.loading = false;
			},
			error: ( error ) => {
				console.log( 'error rate', error );
				this.toastr.error( error.error )
			}
		} );
	}

}
