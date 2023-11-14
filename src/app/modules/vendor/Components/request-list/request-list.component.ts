import { Component, OnInit } from '@angular/core';
import { addRequestService } from '../../services/Request-list/AppRequestService.service';
import { IRequest } from 'src/app/core/models/IRequest';



@Component( {
	selector: 'app-request-list',
	templateUrl: './request-list.component.html',
	styleUrls: [ './request-list.component.css' ]
} )
export class RequestListComponent implements OnInit {
	isThereError: boolean = false;
	errorMessage: string = "";
	P = 1;

	requestList: IRequest[] = [];
	constructor ( private serviceRequest: addRequestService ) { }

	ngOnInit (): void {
		this.serviceRequest.getAllUserRequests().subscribe(
			{
				next: data => {
					this.requestList = data as IRequest[];
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



