import { Component, Input, OnInit } from '@angular/core';

@Component( {
	selector: 'profile-about-section',
	templateUrl: './about-section.component.html',
	styleUrls: [ './about-section.component.css' ]
} )
export class AboutSectionComponent implements OnInit {

	constructor () { }

	@Input() userId;
	ngOnInit () {
	}

}
