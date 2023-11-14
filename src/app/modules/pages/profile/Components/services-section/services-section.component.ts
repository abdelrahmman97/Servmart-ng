import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IUserProfile } from 'src/app/core/models/User/IUserProfile';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';
import { ServiceService } from 'src/app/modules/services-provider/services/service.service';

@Component( {
	selector: 'profile-services-section',
	templateUrl: './services-section.component.html',
	styleUrls: [ './services-section.component.css' ]
} )
export class ServicesSectionComponent implements OnChanges {

	constructor (
		private auth: AuthService,
		private serService: ServiceService,
		private toastr: ToastrService,
	) { }

	@Input() User: IUserProfile;
	servicesList: any[] = [];

	loading: boolean;
	currentPage: number = 1;
	pageSize: number = 3;
	totalItems: number = 0;

	isCurrentUser: boolean;

	ngOnChanges ( changes: SimpleChanges ): void {
		this.isCurrentUser = this.auth.isCurrentUser( this.User.id );
		// get total items of user rate rows
		this.serService.GetTotalUserRatesCount( this.User.id ).subscribe(
			next => {
				this.totalItems = next as number;
				console.log( `total items`, this.totalItems );
			}
		);

		this.GetServices( this.User.id, this.currentPage, this.pageSize );
	}

	pageChanged ( event: any ) {
		this.currentPage = event;
		this.GetServices( this.User.id, this.currentPage, this.pageSize );
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
