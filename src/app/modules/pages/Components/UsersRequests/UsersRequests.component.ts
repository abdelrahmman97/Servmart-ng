import { Component, OnInit } from '@angular/core';
import { IUsersRequests } from 'src/app/core/models/Request/IUsersRequests';
import { RequestService } from 'src/app/modules/customer/services/Request/Request.service';

@Component( {
	selector: 'app-UsersRequests',
	templateUrl: './UsersRequests.component.html',
	styleUrls: ['./UsersRequests.component.css']
} )
export class UsersRequestsComponent implements OnInit {

	constructor( private reqService: RequestService ) { }

	usersRequestsList: IUsersRequests[] = [];

	ngOnInit() {
		this.reqService.getAllUsersRequests( 1, 3 ).subscribe(
			next => {
				this.usersRequestsList = next as IUsersRequests[];
				console.log( `req`, this.usersRequestsList );
			}
		);
	}

}
