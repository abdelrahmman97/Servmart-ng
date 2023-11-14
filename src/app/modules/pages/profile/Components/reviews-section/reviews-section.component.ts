import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IUserProfile } from 'src/app/core/models/User/IUserProfile';
import { ServiceService } from 'src/app/modules/services-provider/services/service.service';

@Component( {
	selector: 'profile-reviews-section',
	templateUrl: './reviews-section.component.html',
	styleUrls: [ './reviews-section.component.css' ]
} )
export class ReviewsSectionComponent implements OnChanges {

	constructor (
		private serService: ServiceService,
		private toastr: ToastrService,
	) { }

	@Input() User: IUserProfile;
	userServicesRateList: any[] = [];

	loading: boolean;
	currentPage: number = 1;
	pageSize: number = 3;
	totalItems: number = 0;

	ngOnChanges ( changes: SimpleChanges ): void {
		// get total items of user rate rows
		this.serService.GetTotalUserRatesCount( this.User.id ).subscribe(
			next => {
				this.totalItems = next as number;
				console.log( `total items`, this.totalItems );
			}
		);

		this.GetUserRate( this.User.id, this.currentPage, this.pageSize );
	}

	pageChanged ( event: any ) {
		this.currentPage = event;
		this.GetUserRate( this.User.id, this.currentPage, this.pageSize );
	}

	GetUserRate ( userId: string, page: number, pageSize: number ) {
		this.loading = true;
		this.serService.GetUserRate( userId, page, pageSize ).subscribe( {
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
