import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICity } from 'src/app/core/models/Address/ICity';
import { IGovernorate } from 'src/app/core/models/Address/IGovernorate';
import { AddressService } from 'src/app/shared/services/Address/Address.service';
import { OrderService } from '../../services/Cart/Order.service';
import { CartService } from '../../services/Cart/Cart.service';
import { ICartProduct } from 'src/app/core/models/ICart';

@Component({
	selector: 'app-check-out',
	templateUrl: './check-out.component.html',
	styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent {
	GovernoratesList: IGovernorate[];
	CitiesList: ICity[] = [];
	remove: string;
	vaildition: FormGroup = new FormGroup({
		Details: new FormControl(null, [Validators.required]),
		Address: new FormControl(null, [Validators.required]),
		CityId: new FormControl(null, [Validators.required]),
		GovernorateId: new FormControl(null, [Validators.required]),
	});
	GetCart: ICartProduct[] = [];

	constructor(
		private address: AddressService,
		private toastr: ToastrService,
		private router: Router,
		private orderServ: OrderService,
		private cartServ: CartService
	) {
		this.address.getAllGovernorates().subscribe(
			(next) => {
				this.GovernoratesList = next as IGovernorate[];
				console.log(this.GovernoratesList);
			},
			(error) => {
				this.toastr.error('خطأ في عرض المحافظات');
			}
		);
		this.cartServ.GetCart().subscribe({
			next: (value) => {
				console.log(value);
				this.GetCart = value as ICartProduct[];
				console.log(this.GetCart);
			},
		});
	}
	getTotal() {
		let tottal = 0;
		this.GetCart.forEach((i) => (tottal += i.supPrice));
    return tottal;
	}

	getCities(event: any) {
		this.CitiesList = this.GovernoratesList[event.target.value - 1].city;
	}

	show() {
		console.log(this.vaildition.value);
		this.orderServ.MakeOrder(this.vaildition.value).subscribe((data) => {
			this.toastr.success('your order has been created Successfully');
		});
	}
	cansel() {
		console.log((this.vaildition = undefined));
		// console.log(this.vaildition.value)
	}
}
