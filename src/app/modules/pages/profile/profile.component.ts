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



		// TODO(abdo tiba): Remove useles code
		var name = '';
		const categoryName = ''
		const expectedSalary = 0;
		const orderBy = 'ExpectedSalary';
		const isAscending = false;
		const pageSize = 6;
		const pageIndex = this.currentPage;

		this.apiService.getItems( name, categoryName, expectedSalary, orderBy, isAscending, pageSize, pageIndex )
			.subscribe( ( response: PaginationResponse ) => {

				this.items = response.data.$values;

				this.currentPage = response.pageIndex;
				this.pageSize = response.pageSize;
				this.count = response.count;
				this.calculateTotalPages( this.count );
				console.log( this.totalPages );
				console.log( this.currentPage );
				console.log( this.pageSize );

				console.log( this.items );
			} );
	}






	transform ( file: string ): any {

		const binaryString = window.atob( file );
		const len = binaryString.length;
		const bytes = new Uint8Array( len );
		for ( let i = 0; i < len; i++ ) {
			bytes[ i ] = binaryString.charCodeAt( i );
		}

		// Create a Blob from the Uint8Array
		const blob = new Blob( [ bytes ], { type: 'image/png' } );

		// Now you can use this blob to create a safe URL for the img tag
		const objectURL = URL.createObjectURL( blob );
		return this.sanitizer.bypassSecurityTrustUrl( objectURL );
	}

	totalPages: number;
	visibleData: any[];

	calculateTotalPages ( count: number ): void {
		this.totalPages = Math.ceil( count / this.pageSize );
	}



	onPageChange ( pageNumber: number ): void {
		this.currentPage = pageNumber;
		this.ngOnInit();
	}

	getPageNumbers (): number[] {
		return Array.from( { length: this.totalPages }, ( _, index ) => index + 1 );
	}

	onPreviousClick (): void {
		if ( this.currentPage > 1 ) {
			this.currentPage--;
			this.ngOnInit();
		}
	}

	onNextClick (): void {
		if ( this.currentPage < this.totalPages ) {
			this.currentPage++;
			this.ngOnInit();
		}
	}


}


