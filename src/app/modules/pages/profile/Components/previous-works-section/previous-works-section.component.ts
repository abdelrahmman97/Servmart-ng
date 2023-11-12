import { Component, Input, OnInit } from '@angular/core';
import { IUserProfile } from 'src/app/core/models/User/IUserProfile';

@Component( {
	selector: 'profile-previous-works-section',
	templateUrl: './previous-works-section.component.html',
	styleUrls: [ './previous-works-section.component.css' ]
} )
export class PreviousWorksSectionComponent implements OnInit {

	constructor () { }

	@Input() User: IUserProfile;
	previusWorkList: any[] = [];

	ngOnInit () {
	}

	pageChanged ( event: any ) {

	}

}
