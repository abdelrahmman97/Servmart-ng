import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/Request/Request.service';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';
import { ToastrService } from 'ngx-toastr';
import { OfferStatus } from 'src/app/core/Enums/OfferStatus.enum';

@Component( {
	selector: 'app-request',
	templateUrl: './customer-requests-list.component.html',
	styleUrls: ['./customer-requests-list.component.css']
} )
export class CustomerRequestsListComponent implements OnInit {

	constructor(
		private requestService: RequestService,
		private auth: AuthService,
		private toastr: ToastrService
	) { }

	isLoading: boolean;
	currentPage: number = 1;
	pageSize: number = 3;

	status: OfferStatus = OfferStatus.Pending;
	totalRequestItems: number = 0;
	requestList: any[] = [];

	fakeArray = new Array( this.pageSize );

	ngOnInit(): void {
		this.getRequests( this.auth.getUserValue().userID, OfferStatus.Pending, this.currentPage, this.pageSize );
	}

	getRequests( userId: string, status: OfferStatus, page: number, pageSize: number ) {
		this.isLoading = true;
		this.getRequestsCount( this.status );
		this.requestService.getUsersRequests( userId, status, page, pageSize ).subscribe( {
			next: data => {
				this.requestList = data as any[];
				this.isLoading = false;
				console.log(data);
			},
			error: error => {
				this.isLoading = false;
				this.toastr.error( "لقد حدث خطأ غير معروف من فضلك حاول مرة أخرى في وقت لاحق" )
				this.toastr.error( error.statusText );
				console.log( error );
			}
		} );
	}

	getRequestsCount( status: OfferStatus ) {
		this.requestService.GetUserRequestsCountById( this.auth.getUserValue().userID, status ).subscribe(
			next => {
				this.totalRequestItems = next as number;
			}
		);
	}

	statusChanged( status: OfferStatus ) {
		this.status = status;
		this.getRequests( this.auth.getUserValue().userID, status, this.currentPage, this.pageSize );
	}

	pageChanged( event: any ) {
		this.currentPage = event;
		this.getRequests( this.auth.getUserValue().userID, this.status, this.currentPage, this.pageSize );
	}

}
