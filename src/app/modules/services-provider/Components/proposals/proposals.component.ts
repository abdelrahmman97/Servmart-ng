import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OfferStatus } from 'src/app/core/Enums/OfferStatus.enum';
import { IRequestOffer } from 'src/app/core/models/RequestOffers/IRequestOffer';
import { OffersService } from 'src/app/modules/services-provider/services/offers/offers.service';

@Component( {
	selector: 'app-proposals',
	templateUrl: './proposals.component.html',
	styleUrls: [ './proposals.component.css' ]
} )
export class ProposalsComponent implements OnInit {

	constructor (
		private offerService: OffersService,
		private toastr: ToastrService
	) { }

	status: OfferStatus = OfferStatus.Pending;
	offers: IRequestOffer[] = [];
	totaloffersItems: number = 0;

	isLoading: boolean;
	page: number = 1;
	pageSize: number = 3

	ngOnInit () {

		// get total items of offers
		this.offerService.providerOffersByStatusCount( this.status ).subscribe(
			next => {
				this.totaloffersItems = next as number;
				console.log( `total of ${ this.status }`, this.totaloffersItems );
			}
		);

		this.getOffers( this.status, this.page, this.pageSize );

	}

	getOffers ( status: OfferStatus, page: number, pageSize: number ) {
		this.isLoading = true;
		this.offerService.listProviderOffersByStatus( status, page, pageSize ).subscribe( {
			next: ( value ) => {
				this.offers = value as IRequestOffer[]
				console.log( this.offers );
				this.isLoading = false;
			},
			error: ( err ) => {
				this.isLoading = false;
				console.log( err );
			}
		} );
	}

	handlePageChange ( event ) {
		this.page = event;
		this.getOffers( this.status, this.page, this.pageSize );
	}

	statusChanged ( status: OfferStatus ) {
		this.getOffers( status, this.page, this.pageSize );
	}



}
