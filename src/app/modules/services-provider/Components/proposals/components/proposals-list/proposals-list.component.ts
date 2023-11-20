import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IRequestOffer } from 'src/app/core/models/RequestOffers/IRequestOffer';
import { OffersService } from 'src/app/modules/services-provider/services/offers/offers.service';

@Component( {
	selector: 'proposals-list',
	templateUrl: './proposals-list.component.html',
	styleUrls: ['./proposals-list.component.css']
} )
export class ProposalsListComponent {

	constructor(
		private offerService: OffersService,
		private toastr: ToastrService
	) { }

	@Input() status: number = 0;
	@Input() offers: IRequestOffer[] = [];
	@Input() totaloffersItems: number = 0;
	@Output() pageChangedEvent: EventEmitter<any> = new EventEmitter();

	isLoading: boolean;
	@Input() currentPage: number = 1;
	pageSize: number = 3

	pageChanged( event: any ) {
		this.currentPage = event as number;
		this.pageChangedEvent.emit( event )
	};

	setAsCompleted( id: string ) {
		this.offerService.setAsCompleted( id ).subscribe( {
			next: ( value ) => {
				this.toastr.info( `completed: ${value}` );
				this.offers.splice( this.offers.findIndex( o => o.id == id ), 1 );
			},
			error: ( error ) => {
				this.toastr.error( `completed: ${error}` );
			}
		} );
	}

	setAsArchived( id: string ) {
		this.offerService.archiveOffer( id ).subscribe( {
			next: ( value ) => {
				this.toastr.info( `completed: ${value}` );
				this.offers.splice( this.offers.findIndex( o => o.id == id ), 1 );
			},
			error: ( error ) => {
				this.toastr.error( `completed: ${error}` );
			}
		} );
	}

}
