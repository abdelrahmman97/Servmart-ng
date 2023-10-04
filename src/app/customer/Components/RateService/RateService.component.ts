import { Component } from '@angular/core';

@Component( {
	selector: 'app-RateService',
	templateUrl: './RateService.component.html',
	styleUrls: ['./RateService.component.css']
} )
export class RateServiceComponent {

	rate_1_index: number = 0;
	rate_2_index: number = 0;
	rate_3_index: number = 0;

	mousePosition: number = 0;
	rect: any;

	setMousePosition( event: any, index: number ) {
		this.rect = event.target.getBoundingClientRect();
		this.mousePosition = event.x - this.rect.left;
		this.setRate1( index );
		console.log( this.mousePosition );
		console.log( this.rate_1_index );

	}

	createRange( number: number ) {
		// return new Array(number);
		return new Array( number ).fill( 0 )
			.map( ( n, index ) => index + 1 );
	}
	numberOfStars = this.createRange( 5 );

	private setRate1( index: number ) { this.rate_1_index = index; }
	private setRate2( index: number ) { this.rate_2_index = index; }
	private setRate3( index: number ) { this.rate_3_index = index; }
}
