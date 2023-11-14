import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUserProfile } from 'src/app/core/models/User/IUserProfile';

@Component( {
	selector: 'profile-previous-works-section',
	templateUrl: './previous-works-section.component.html',
	styleUrls: [ './previous-works-section.component.css' ]
} )
export class PreviousWorksSectionComponent implements OnChanges {

	constructor () { }

	@Input() User: IUserProfile;
	previusWorkList: any[] = [];

	ngOnChanges ( changes: SimpleChanges ): void {
	}

	pageChanged ( event: any ) {

	}

}
