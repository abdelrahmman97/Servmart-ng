import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/modules/customer/services/Request/Request.service';
import { RequestOffersService } from 'src/app/modules/customer/services/request-offers/request-offers.service';

@Component( {
	selector: 'app-request-order-details',
	templateUrl: './request-order-details.component.html',
	styleUrls: [ './request-order-details.component.css' ]
} )
export class RequestOrderDetailsComponent implements OnInit {

	constructor (
		private activeRoute: ActivatedRoute,
		private reqService: RequestService,
		private reqOffer: RequestOffersService,
	) { }

	requestId: string = "";
	request: any = null;
	isLoading: boolean = false;

	ngOnInit () {

		this.activeRoute.params.subscribe( {
			next: ( params ) => {
				this.isLoading = true;
				this.requestId = params[ 'id' ];
				this.reqService.getRequestById( this.requestId ).subscribe( {
					next: ( data ) => {
						this.request = data as any;
						this.isLoading = false;
						console.log( "🚀 ~ request data:", data )
					},
					error: ( error ) => {
						this.isLoading = false;
						console.log( "🚀 ~ request error:", error )
					}
				} );
			},
			error: ( error ) => {
				this.isLoading = false;
				console.log( "🚀 ~ param errro:", error )
			}
		} );
	}

	isVideo ( url: string ): boolean {
		const parts = url.split( '.' );
		const fileExtension = parts[ parts.length - 1 ];
		const videoExtensions = [ 'mp4' ];
		return videoExtensions.includes( fileExtension.toLowerCase() );
	}

	chat ( id: string ) {
		throw new Error( 'Method Chat() not implemented.' );
	}

	accept ( id: string ) {
		this.reqOffer.acceptOffer( id ).subscribe( {
			next: ( value ) => {
				console.log( `aceept done: `, value );
			},
			error: ( error ) => {
				console.log( `aceept error: `, error );
			}
		} );
	}

	reject ( id: string ) {
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
