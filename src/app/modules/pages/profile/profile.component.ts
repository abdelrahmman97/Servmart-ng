import { Component } from '@angular/core';
import { ServiceService } from '../../services-provider/services/service.service';
import { PaginationResponse } from '../services/interfaces/PaginationResponse';
import { Item } from '../services/interfaces/Item';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '../../auth/services/auth/Auth.service';
import { ActivatedRoute } from '@angular/router';
import { IUserProfile } from 'src/app/core/models/User/IUserProfile';
import { Role } from 'src/app/core/Enums/Role.enum';

@Component( {
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: [ './profile.component.css' ]
} )
export class ProfileComponent {

	constructor (
		private activeRoute: ActivatedRoute,
		private auth: AuthService,
		private apiService: ServiceService,
		private sanitizer: DomSanitizer
	) { }

	isLoading: boolean = false;
	tab: string = "about";

	userId: string = "";
	user: IUserProfile = null;
	userRoles: string[] = [];

	isUserLoggedInCustomer: boolean = this.auth.isUserLoggedInCustomer();
	isUserLoggedInVendor: boolean = this.auth.isUserLoggedInVendor();
	isUserLoggedInServiceProvider: boolean = this.auth.isUserLoggedInServiceProvider();
	isUserLoggedInAdmin: boolean = this.auth.isUserLoggedInAdmin();

	isViewProfileUserSProvider: boolean = false;

	items: Item[] = [];
	currentPage = 1;
	pageSize: number;
	count: number;

	isCurrentUser: boolean = false;

	ngOnInit (): void {

		this.activeRoute.params.subscribe( {
			next: ( params ) => {
				this.isLoading = true;
				this.userId = params[ 'id' ];
				this.isCurrentUser = this.auth.isCurrentUser( this.userId );

				this.auth.getUserFromApi( this.userId ).subscribe( {
					next: ( data ) => {
						const _data = data as any;
						this.user = _data.user as IUserProfile;
						this.userRoles = _data.roles as any[];
						this.isViewProfileUserSProvider = this.userRoles.includes( Role.ServiceProvider );
						this.isLoading = false;
						console.log( "🚀 ~ this.user:", this.user )
					},
					error: ( error ) => {
						this.isLoading = false;
						console.log( "🚀 ~ error 1:", error )
					}
				} );

			},
			error: ( error ) => {
				this.isLoading = false;
				console.log( "🚀 ~ errro 2:", error )
			}
		} );

	}

}


