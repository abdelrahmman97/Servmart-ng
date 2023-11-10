import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddProductService } from '../../services/Product/AppProductService.service';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { Router } from '@angular/router';
import { IProductCategory } from 'src/app/core/models/Product/IProductCategory';


@Component({
	selector: 'app-add-produects',
	templateUrl: './add-produects.component.html',
	styleUrls: ['./add-produects.component.css']
})
export class AddProduectsComponent implements OnInit {

	constructor(
		private addproduct: AddProductService,
		public _router: Router
	) {}
	Data: FormData = new FormData();
	reactiveForm: FormGroup;
	Prodcts: IProduct[] = [];

	file: File;
	url: any;
	msg = '';
	ngOnInit(): void {
		this.reactiveForm = new FormGroup({
			ProductName: new FormControl(null),
			CategoryID: new FormControl(null),
			// productBrand: new FormControl(null),
			Stoke: new FormControl(null),
			UnitPrice: new FormControl(null),
			Description: new FormControl(null),
		});
		console.log(this.reactiveForm);

		this.addproduct.GetCagory().subscribe((i) => {
			this.catgory = i as IProductCategory[];
			console.log(this.catgory);
		});
	}

	catgory: IProductCategory[] = [];

	// product: IProduct = {} as IProduct;
	product: IProduct;
	onSubmite() {
		// console.log(this.reactiveForm);
		// console.log(this.reactiveForm.controls['productName'].value);
		// this.product = {
		// 	Name: this.reactiveForm.controls['productName'].value,
		// 	CategoryID: this.reactiveForm.controls['productCategory'].value,
		// 	Discription: this.reactiveForm.controls['productDescription'].value,
		// 	Stock: this.reactiveForm.controls['productCountity'].value,
		// 	UnitePrice: this.reactiveForm.controls['productPrice'].value,
		// 	UserID: 1,
		// };
		// this.addproduct.AddProduct(this.product);
		// console.log(this.addproduct.products);

		console.log(this.Data.get("Pics"));

		for (const key in this.reactiveForm.value) {
			this.Data.append(key, this.reactiveForm.controls[key].value);
		}

		this.addproduct.AddProductAPi(this.Data).subscribe({
			next: (response) => {
				console.log(response);
				this._router.navigateByUrl("/shop")
			},
			error: (error) => {
				console.log(error);

			},
			
		});
	}

	getFile(event: any) {
		for (let index = 0; index <  event.target.files.length; index++) {
			this.Data.append("Pics", <File>event.target.files[index]);
			
		}
		this.file = event.target.files;
		console.log(this.file);
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = '';
			this.url = reader.result;
		};
	}
	removeFile() {
		this.file = null;
		this.Data.append('Pics', '');
	}
}
