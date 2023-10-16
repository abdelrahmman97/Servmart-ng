import { Component, EventEmitter, OnInit } from '@angular/core';
import { CartService } from '../../services/Cart/Cart.service';
import { ICart, ICartProduct } from 'src/app/core/models/ICart';

@Component( {
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
} )
export class CartComponent implements OnInit {

	cart: ICart;
	products: ICartProduct[];
	totalUnitsPrice: number = 0;
	totalPrice: number = 0;
	serviceFee: number = 3;

	constructor( private cartService: CartService ) { }

	ngOnInit(): void {
		this.cartService.GetCart().subscribe( {
			next: data => {
				this.cart = data[0] as ICart;
				this.products = this.cart.Products;
				this.totalPriceChanged()
			}
		} );
	}

	totalPriceChanged() {
		this.totalUnitsPrice = 0;
		this.totalPrice = 0;
		this.products.forEach( p => this.totalUnitsPrice += ( p.UnitPrice * p.Quantity ) );
		this.totalPrice = this.serviceFee + this.totalUnitsPrice;
	}

	remove( product: ICartProduct ) {

		const index = this.products.indexOf( product, 0 );
		if ( index > -1 ) {
			this.products.splice( index, 1 );
			this.cartService.Remove( product.ID ).subscribe( {
				next: data => {
					console.log( `deleted`, data );
					this.totalPriceChanged();
				},
				error: error => {
					console.log( `error`, error );
					this.totalPriceChanged();
				}
			} );
		}
	}

	stepUp( product: ICartProduct ) {
		( product.Quantity != 10 ) ? product.Quantity++ : '';
		this.totalPriceChanged();
	}
	stepDown( product: ICartProduct ) {
		( product.Quantity != 1 ) ? product.Quantity-- : '';
		this.totalPriceChanged();
	}


	// select( id: number ) {
	// 	if ( this.cartArray ) {

	// 		this.cartArray.find( i => i.id ) == id;
	// 		this.number * 25
	// 		console.log( this.cartArray.values )
	// 	}
	// 	else {
	// 		this.cartArray.splice( this.cartArray.indexOf( id ), 1 );
	// 	}
	// 	console.log( this.cartArray )
	// }




}
