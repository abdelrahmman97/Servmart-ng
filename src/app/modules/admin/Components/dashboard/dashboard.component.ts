import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { IProductCategory } from 'src/app/core/models/Product/IProductCategory';
import { AddProductService } from 'src/app/modules/vendor/services/Product/AppProductService.service';

@Component( {
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
} )
export class DashboardComponent implements OnInit {

	catlist: IProductCategory[];
	protects: IProduct[];
	products: any[] = [];
	protectedlisteofcat: IProduct[] = [];
	selectedcatid: number = 0;
	ordertotalprice: number = 0;
	isThereError: boolean;
	errorMessage: string;

	constructor( private productService: AddProductService ) {
		// this.protects=[
		//   {id: 100,name:"labtob",price:10000,quntity:30,categoryid:1},
		//   {id: 101,name:"Phone",price:50000,quntity:2,categoryid:2},
		//   {id: 102,name:"DeskTop",price:20000,quntity:40,categoryid:3},
		//   {id: 103,name:"watch",price:65000,quntity:15,categoryid:4},
		//   {id: 104,name:"HeadPhone",price:22000,quntity:11,categoryid:5},

		// ];
		this.protectedlisteofcat = this.protects;
		console.log( this.protectedlisteofcat )
	}

	//   ngOnInit() {
	//     this.productService.getProducts().subscribe((data) => {
	//       this.products = data;
	//       console.log(this.products)
	//     });

	//   }


	ngOnInit(): void {
		this.productService.gstAll().subscribe(
			{
				next: data => {
					this.products = data as any[];
					console.log( this.products );
				},
				error: error => {
					this.isThereError = true;
					this.errorMessage = "لقد حدث خطأ غير معروف من فضلك حاول مرة أخرى في وقت لاحق";
					// this.errorMessage = error.statusText;
					console.log( error );
				}
			}
		);

	}

}
