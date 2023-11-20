import { Component, OnInit } from '@angular/core';
import { RequestOffersService } from '../../services/request-offers/request-offers.service';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from 'src/app/modules/services-provider/services/offers/offers.service';

@Component( {
	selector: 'app-RequestOffers',
	templateUrl: './RequestOffers.component.html',
	styleUrls: ['./RequestOffers.component.css']
} )
export class RequestOffersComponent implements OnInit {

	constructor(
		private reqOffer: RequestOffersService,
		private offersService: OffersService,
		private activatedRoute: ActivatedRoute
	) { }

	isLoading: boolean;
	currentPage: number = 1;
	pageSize: number = 5;
	offersList: any[] = [];
	offersCount: number = 0;
	requestId: string = "";

	requestTitle: string = "";

	ngOnInit() {

		this.activatedRoute.params.subscribe( {
			next: ( params ) => {
				this.requestId = params["id"];
				this.getOffersCount( this.requestId );
				this.getOffers( this.requestId, this.currentPage, this.pageSize );
			},
			error: ( err ) => {
				console.log( `params error: `, err );
			}
		} );

	}

	getOffersCount( requestId: string ) {
		this.offersService.userRequestOffersCount( requestId ).subscribe( {
			next: ( value ) => {
				this.offersCount = value as number;
				console.log( `count: `, this.offersCount );
			},
			error: ( error ) => {
				console.log( `get count error: `, error );
			}
		} );
	}

	getOffers( requestId: string, page: number, pageSize: number ) {
		this.offersService.listUserRequestOffers( requestId, page, pageSize ).subscribe( {
			next: ( value ) => {
				this.offersList = value as any[];
				this.requestTitle = this.offersList[0].request.title;
				console.log( `offers list: `, this.offersList );
			},
			error: ( error ) => {
				console.log( `get offers error: `, error );
			}
		} );
	}

	pageChanged( event: any ) {
		this.currentPage = event as number;
		this.getOffers( this.requestId, this.currentPage, this.pageSize );
	}

	chat( id: string ) {
		throw new Error( 'Method Chat() not implemented.' );
	}

	accept( id: string ) {
		this.reqOffer.acceptOffer( id ).subscribe( {
			next: ( value ) => {
				console.log( `aceept done: `, value );
			},
			error: ( error ) => {
				console.log( `aceept error: `, error );
			}
		} );
	}

	reject( id: string ) {
		this.reqOffer.rejectOffer( id ).subscribe( {
			next: ( value ) => {
				console.log( `reject done: `, value );
			},
			error: ( error ) => {
				console.log( `reject error: `, error );
			}
		} );
	}
}
