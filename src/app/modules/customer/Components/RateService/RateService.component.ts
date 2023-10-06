import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component( {
	selector: 'app-RateService',
	templateUrl: './RateService.component.html',
	styleUrls: ['./RateService.component.css']
} )
export class RateServiceComponent implements OnInit {

	@Input() nominateToOthers: number = 0;
	@Input() workQuality: number = 0;
	@Input() respectDeliveryTime: number = 0;

	ngOnInit(): void { }

	nominateToOthersChanged( value: any ) {
		this.nominateToOthers = value * 2;
	}
	workQualityChanged( value: any ) {
		this.workQuality = value * 2;
	}
	respectDeliveryTimeChanged( value: any ) {
		this.respectDeliveryTime = value * 2;
	}

}
