import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IRequestOffer } from 'src/app/core/models/RequestOffers/IRequestOffer';

@Component( {
	selector: 'proposals-list',
	templateUrl: './proposals-list.component.html',
	styleUrls: ['./proposals-list.component.css']
} )
export class ProposalsListComponent {

	constructor() { }

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

}
