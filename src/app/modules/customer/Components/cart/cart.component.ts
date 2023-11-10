import { Component, EventEmitter, OnInit } from '@angular/core';
import { CartService } from '../../services/Cart/Cart.service';
import { ICart, ICartProduct } from 'src/app/core/models/ICart';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
	cart: ICart;
	products: ICartProduct[];
	totalUnitsPrice: number = 0;
	totalPrice: number = 0;
	serviceFee: number = 3;
	id: string = '';
	GetCart: ICartProduct[] = [];

	constructor(
		private cartService: CartService,
		public active: ActivatedRoute,
		private toaster: ToastrService
	) {
		this.id = active.snapshot.params['id'];
	}

	ngOnInit(): void {
		// this.cartService.GetCart("25ab619a-0828-5f12-8395-034afb685eb3").subscribe({
		// 	next: data => {
		// 		this.cart = data[0] as ICart;
		// 		this.products = this.cart.Products;
		// 		this.totalPriceChanged()
		// 	}
		// });
		this.getAll();
	}
	getAll() {
		this.cartService.GetCart().subscribe({
			next: (value) => {
				console.log(value);
				this.GetCart = value as ICartProduct[];
				console.log(this.GetCart);
			},
		});
	}
	totalPriceChanged() {
		// this.totalUnitsPrice = 0;
		// this.totalPrice = 0;
		// if (this.GetCart.length == 0) {
		// 	this.serviceFee = 0;
		// } else {
		// 	this.GetCart.forEach(
		// 		(p) => (this.totalUnitsPrice += p.unitPrice * p.unitPrice)
		// 	);
		// 	this.totalPrice = this.serviceFee + this.totalUnitsPrice;
		// }
	}

	// remove(product: ICartProduct) {
	// 	const index = this.products.indexOf(product, 0);
	// 	if (index > -1) {
	// 		this.products.splice(index, 1);
	// 		this.cartService.Remove(product.ID).subscribe({
	// 			next: data => {
	// 				console.log(`deleted`, data);
	// 				this.totalPriceChanged();
	// 			},
	// 			error: error => {
	// 				console.log(`error`, error);
	// 				this.totalPriceChanged();
	// 			}
	// 		});
	// 	}
	// }

	emptyCart() {
		this.cartService.Empty().subscribe({
			next: (data) => {
				this.getAll();
				this.toaster.info("Cart updated successfully")
			},
			error: (err) => {
				this.toaster.error("SOMTHING WRONG HAPPEND")
			},
		});
	}
	remove(id:number){
		this.cartService.Delete(id).subscribe({
			next: (data) => {
				this.getAll();
				this.toaster.info("Cart updated successfully")
			},
			error: (err) => {
				this.toaster.error("SOMTHING WRONG HAPPEND")
			},
		});
	}
	stepUp(product: ICartProduct) {
		product.count != product.stoke ? product.count++ : 1;
		this.cartService.UpdateCart(product.id, product.count).subscribe({
			next: (data) => {
				this.getAll();
				this.toaster.info("Cart updated successfully")
			},
			error: (err) => {
				this.toaster.error("SOMTHING WRONG HAPPEND")
			},
		});
	}
	stepDown(product: ICartProduct) {
		product.count != 1 ? product.count-- : 1;
		this.cartService.UpdateCart(product.id, product.count).subscribe({
			next: (data) => {
				this.getAll();
				this.toaster.info("Cart updated successfully")
			},
			error: (err) => {
				this.toaster.error("SOMTHING WRONG HAPPEND")
			},
		});
	}
}
