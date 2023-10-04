import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-Rating',
	templateUrl: './Rating.component.html',
	styleUrls: ['./Rating.component.css']
})
export class RatingComponent implements OnInit {

	@Input() numberOfStars: number = 5;


	starsNumber: number[] = [];
	rate: number = 0;
	mousePosition: number = 0;
	rect: any;
	id: string = "";

	constructor() { }

	ngOnInit() {
		this.starsNumber = new Array(this.numberOfStars).fill(0)
			.map((n, index) => index + 1);
		this.id = this.getUniqueId(1);
	}

	setRating(event: any, index: number) {
		this.rect = event.target.getBoundingClientRect();
		this.mousePosition = event.x - this.rect.left;
		this.rate = index;
	}

	setRatingHover(event: any, index: number) {
		this.rect = event.target.getBoundingClientRect();
		this.mousePosition = event.x - this.rect.left;
		this.rate = index;
		// console.log(this.mousePosition);
		// console.log(this.rate);
	}

	/**
	 * generate groups of 4 random characters
	 * @example getUniqueId(1) : 607f
	 * @example getUniqueId(2) : 95ca-361a
	 * @example getUniqueId(4) : 6a22-a5e6-3489-896b
	 */
	getUniqueId(parts: number): string {
		const stringArr = [];
		for (let i = 0; i < parts; i++) {
			// tslint:disable-next-line:no-bitwise
			const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
			stringArr.push(S4);
		}
		return stringArr.join('-');
	}


}
