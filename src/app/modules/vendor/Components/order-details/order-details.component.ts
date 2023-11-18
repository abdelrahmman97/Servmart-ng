import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addRequestService } from '../../services/Request-list/AppRequestService.service';
import { IRequest } from 'src/app/core/models/IRequest';


@Component( {
	selector: 'app-order-details',
	templateUrl: './order-details.component.html',
	styleUrls: [ './order-details.component.css' ]
} )
export class OrderDetailsComponent {
	id: Number;
	Request: IRequest = {} as IRequest;
	Data: boolean = false;
	constructor ( private Actic: ActivatedRoute, http: HttpClient, private ReruestDetails: addRequestService ) {
		this.Actic.params.subscribe( {
			next: ( prams ) => {
				this.id = prams[ "Id" ];
				console.log( "ID", prams );
				this.ReruestDetails.gitone( prams[ "id" ] ).subscribe( {
					next: ( data ) => {
						this.Request = data[ 0 ];
						console.log( 'Data:', data[ 0 ] );
					}
				} )
			}

		} )


	}

}
