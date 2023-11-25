import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OfferStatus } from 'src/app/core/Enums/OfferStatus.enum';
import { IRequestOffer } from 'src/app/core/models/RequestOffers/IRequestOffer';
import { OffersService } from 'src/app/modules/services-provider/services/offers/offers.service';

@Component( {
	selector: 'app-proposals',
	templateUrl: './proposals.component.html',
	styleUrls: ['./proposals.component.css']
} )
export class ProposalsComponent implements OnInit {

	constructor(
		private offerService: OffersService,
		private toastr: ToastrService
	) { }

	status: OfferStatus = OfferStatus.Pending;
	offers: IRequestOffer[] = [];
	totaloffersItems: number = 0;

	isLoading: boolean;
	page: number = 1;
	pageSize: number = 3

	ngOnInit() {
		this.getOffers( this.status, this.page, this.pageSize );
	}

	getOffers( status: OfferStatus, page: number, pageSize: number ) {
		this.isLoading = true;
		console.log( `status: `, OfferStatus[status] );
		this.getOffersCount( status );
		this.offerService.listProviderOffersByStatus( status, page, pageSize ).subscribe( {
			next: ( value ) => {
				this.offers = value as IRequestOffer[]
				this.isLoading = false;
				console.log( `value:`, this.offers );
			},
			error: ( err ) => {
				this.isLoading = false;
				console.log( err );
			}
		} );
	}

	getOffersCount( status: OfferStatus ) {
		this.offerService.providerOffersByStatusCount( this.status ).subscribe(
			next => {
				this.totaloffersItems = next as number;
				console.log( `total of ${OfferStatus[this.status]} items`, this.totaloffersItems );
			}
		);
	}

	handlePageChange( event ) {
		this.page = event;
		console.log( `event: `, event );
		this.getOffers( this.status, event, this.pageSize );
	}

	statusChanged( status: OfferStatus ) {
		this.status = status;
		this.getOffers( status, this.page, this.pageSize );
	}



}
