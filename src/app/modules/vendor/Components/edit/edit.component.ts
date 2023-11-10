import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddProductService } from '../../services/Product/AppProductService.service';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { Router } from '@angular/router';
import { IProductCategory } from 'src/app/core/models/Product/IProductCategory';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/modules/pages/services.service';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
	Data: FormData = new FormData();
	reactiveForm: FormGroup;
	Prodcts: IProduct[] = [];
	DeatilsProduct: IProduct;
	file: File;
	url: any;
	msg = '';
	id: string = '';
	loading: boolean= false;
	constructor(
		public add: AddProductService,
		public active: ActivatedRoute,
		public update: ServicesService,
		public route: Router
	) {
		this.id = active.snapshot.params['id'];
		console.log(this.id);
	}

	catgory: IProductCategory[] = [];

	// product: IProduct = {} as IProduct;
	product: IProduct;

	getFile(event: any) {
		for (let index = 0; index < event.target.files.length; index++) {
			this.Data.append('Pics', <File>event.target.files[index]);
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

	ngOnInit(): void {
		this.loading = true;
		this.update.Details(this.id).subscribe((data) => {
			this.DeatilsProduct = data as IProduct;
			console.log(this.DeatilsProduct);
			this.reactiveForm = new FormGroup({
				productName: new FormControl(this.DeatilsProduct.productName, [
					Validators.required,
				]),
				categoryID: new FormControl(this.DeatilsProduct.categoryID),
				// productBrand: new FormControl(null),
				stoke: new FormControl(this.DeatilsProduct.stoke),
				unitPrice: new FormControl(this.DeatilsProduct.unitPrice),
				description: new FormControl(this.DeatilsProduct.description),
			});
			this.loading = false;
		});
		this.add.GetCagory().subscribe((i) => {
			this.catgory = i as IProductCategory[];
			console.log(this.catgory);
		});

		// console.log(this.reactiveForm);
	}
	onSubmite() {

		for (const key in this.reactiveForm.value) {
			this.Data.append(key, this.reactiveForm.controls[key].value);
		}

		this.add.UpdateProduct(this.Data, this.id).subscribe({
			next: (response) => {
				console.log(response);
				this.route.navigateByUrl('/productList');
			},
			error: (error) => {
				console.log(error);
			},
		});
	}
}
