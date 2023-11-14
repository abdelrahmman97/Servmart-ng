import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/core/Enums/Role.enum';
import { IUserProfile } from 'src/app/core/models/User/IUserProfile';
import { ServiceService } from 'src/app/modules/services-provider/services/service.service';

@Component( {
	selector: 'profile-about-section',
	templateUrl: './about-section.component.html',
	styleUrls: [ './about-section.component.css' ]
} )
export class AboutSectionComponent implements OnChanges {

	// TODO(abdo tiba): Get User Rate
	// TODO(abdo tiba): Get User total services
	// TODO(abdo tiba): Get User account created date
	// TODO(abdo tiba): Get User total works

	constructor (
		private serService: ServiceService,
		private toastr: ToastrService,
	) { }


	@Input() User: IUserProfile;
	@Input() UserRoles: string[];
	totalServices: number = 0;
	loading: boolean;
	isViewProfileUserSProvider: boolean = false;

	ngOnChanges ( changes: SimpleChanges ): void {
		console.log( this.UserRoles );
		this.isViewProfileUserSProvider = this.UserRoles.includes( Role.ServiceProvider );
		console.log( this.isViewProfileUserSProvider );
		this.GetTotalServices( this.User.id );
	}

	GetTotalServices ( userId: string ) {
		this.loading = true;
		this.serService.getTotalUserServicesCount( userId ).subscribe( {
			next: ( data ) => {
				this.totalServices = data as number;
				console.log( data );
				this.loading = false;
			},
			error: ( error ) => {
				console.log( 'error GetTotalServices', error );
				this.toastr.error( error.error )
			}
		} );
	}

}
