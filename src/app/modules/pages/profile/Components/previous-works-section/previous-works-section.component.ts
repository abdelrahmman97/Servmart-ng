import { Component, Input, OnInit } from '@angular/core';

@Component( {
	selector: 'profile-previous-works-section',
	templateUrl: './previous-works-section.component.html',
	styleUrls: [ './previous-works-section.component.css' ]
} )
export class PreviousWorksSectionComponent implements OnInit {

	constructor () { }

	@Input() userId;
	previusWorkList: any[] = [];

	ngOnInit () {
	}

	pageChanged ( event: any ) {

	}

}
