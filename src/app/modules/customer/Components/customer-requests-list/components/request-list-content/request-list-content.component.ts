import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component( {
	selector: 'request-list-content',
	templateUrl: './request-list-content.component.html',
	styleUrls: [ './request-list-content.component.css' ]
} )
export class RequestListContentComponent {

	constructor (
		private toastr: ToastrService
	) { }

	@Input() status: number = 0;
	@Input() requestList: any[] = [];
	@Input() totalItems: number = 0;
	@Output() pageChangedEvent: EventEmitter<any> = new EventEmitter();

	isLoading: boolean;
	@Input() currentPage: number = 1;
	pageSize: number = 3

	pageChanged ( event: any ) {
		this.currentPage = event as number;
		this.pageChangedEvent.emit( event )
	};

}
