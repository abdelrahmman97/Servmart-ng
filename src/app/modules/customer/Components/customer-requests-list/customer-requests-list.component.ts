import { Component, OnInit } from '@angular/core';
import { IRequest } from 'src/app/core/models/Request/IRequest';
import { RequestService } from '../../services/Request/Request.service';
import { IUsersRequests } from 'src/app/core/models/Request/IUsersRequests';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';

@Component( {
	selector: 'app-request',
	templateUrl: './customer-requests-list.component.html',
	styleUrls: [ './customer-requests-list.component.css' ]
} )
export class CustomerRequestsListComponent implements OnInit {


	constructor (
		private requestService: RequestService,
		private auth: AuthService
	) { }

	isThereError: boolean = false;
	errorMessage: string = "";

	loading: boolean;
	currentPage: number = 1;
	pageSize: number = 3;

	totalRequestItems: number = 0;
	requestList: any[] = [];

	fakeArray = new Array( this.pageSize );


	ngOnInit (): void {
		// get total items of requests
		this.requestService.GetUserRequestsCountById( this.auth.getUserValue().userID ).subscribe(
			next => {
				this.totalRequestItems = next as number;
				console.log( `total Request Items`, this.totalRequestItems );
			}
		);

		this.getRequests( this.auth.getUserValue().userID, this.currentPage, this.pageSize );
	}

	pageChanged ( event: any ) {
		this.currentPage = event;
		this.getRequests( this.auth.getUserValue().userID, this.currentPage, this.pageSize );
	}

	getRequests ( userId: string, page: number, pageSize: number ) {
		this.loading = true;
		this.requestService.getUsersRequests( this.auth.getUserValue().userID, 1, 3 ).subscribe(
			{
				next: data => {
					this.requestList = data as any[];
					console.log( this.requestList );
				},
				error: error => {
					this.isThereError = true;
					this.errorMessage = "لقد حدث خطأ غير معروف من فضلك حاول مرة أخرى في وقت لاحق";
					// this.errorMessage = error.statusText;
					console.log( error );
				}
			}
		);
	}




}
