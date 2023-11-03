import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
	selector: 'app-single-order',
	templateUrl: './single-order.component.html',
	styleUrls: ['./single-order.component.css']
} )
export class SingleOrderComponent implements OnInit {

	constructor( private router: Router ) { }

	ngOnInit() {
	}
	navigateToOrderlist() {
		this.router.navigate( ['/Order-List'] );
	}
}
