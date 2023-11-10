import { Component, OnInit } from '@angular/core';
import { IRequest } from 'src/app/core/models/Request/IRequest';
import { RequestService } from '../../services/Request/Request.service';

@Component( {
	selector: 'app-request',
	templateUrl: './customer-requests-list.component.html',
	styleUrls: [ './customer-requests-list.component.css' ]
} )
export class CustomerRequestsListComponent implements OnInit {


	isThereError: boolean = false;
	errorMessage: string = "";

	requestList: IRequest[] = [];
	constructor ( private requestService: RequestService ) { }

	ngOnInit (): void {
		// this.serviceRequest.getAllUserRequests().subscribe(
		// 	{
		// 		next: data => {
		// 			this.requestList = data as IRequest[];
		// 			console.log( this.requestList );
		// 		},
		// 		error: error => {
		// 			this.isThereError = true;
		// 			this.errorMessage = "لقد حدث خطأ غير معروف من فضلك حاول مرة أخرى في وقت لاحق";
		// 			// this.errorMessage = error.statusText;
		// 			console.log( error );
		// 		}
		// 	}
		// );
	}




}
