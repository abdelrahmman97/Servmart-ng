import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component( {
	selector: 'app-rating',
	templateUrl: './Rating.component.html',
	styleUrls: ['./Rating.component.css'],
	providers: [DecimalPipe]
} )
export class RatingComponent implements OnInit {

	@Input() numberOfStars: number;
	@Input() rating: number;
	@Input() color: string;
	@Input() fontSize: number;
	@Input() isDisabled: boolean = false;

	mousePosition: number = 0;
	rect: any;
	id: string = "";

	@Output() rateChanged: EventEmitter<number> = new EventEmitter<number>();

	constructor() {
		this.numberOfStars = 5;
		this.rating = 0;
		this.color = "#0072F5";
		this.fontSize = 16;
	}

	ngOnInit() {
		this.rating = this.rating / 2;
	}

	/**
	 * generate groups of 4 random characters
	 * @example getUniqueId(1) : 607f
	 * @example getUniqueId(2) : 95ca-361a
	 * @example getUniqueId(4) : 6a22-a5e6-3489-896b
	 */
	getUniqueId( parts: number ): string {
		const stringArr = [];
		for ( let i = 0; i < parts; i++ ) {
			// tslint:disable-next-line:no-bitwise
			const S4 = ( ( ( 1 + Math.random() ) * 0x10000 ) | 0 ).toString( 16 ).substring( 1 );
			stringArr.push( S4 );
		}
		return stringArr.join( '-' );
	}

	getFullStars(): number[] {
		const fullStars = [];
		for ( let i = 0; i < Math.floor( this.rating ); i++ ) {
			fullStars.push( i );
		}
		return fullStars;
	}

	getEmptyStars(): number[] {
		const emptyStars = [];
		for ( let i = Math.ceil( this.rating ); i < this.numberOfStars; i++ ) {
			emptyStars.push( i );
		}
		return emptyStars;
	}

	getHalfStars(): number[] {
		const halfStars = [];
		if ( this.rating - Math.floor( this.rating ) > 0 ) {
			halfStars.push( Math.floor( this.rating ) );
		}
		return halfStars;
	}

	onStarClick( event: any, starIndex: number ) {
		if ( !this.isDisabled ) {

			starIndex += 1;
			this.rect = event.target.getBoundingClientRect();
			this.mousePosition = -1 * ( event.x - this.rect.right );
			if ( ( this.mousePosition / 100 ) >= 0.15 ) {
				this.rating = starIndex;
			} else {
				this.rating = starIndex - 0.5;

			}
			this.rateChanged.emit( this.rating );
		}
	}

}
