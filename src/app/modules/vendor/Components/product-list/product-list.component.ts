import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { AddProductService } from '../../services/Product/AppProductService.service';
import { ServicesService } from 'src/app/modules/pages/services.service';

@Component({
  selector: 'app-product-list',
  templateUrl:'./product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit{

	isThereError: boolean = false;
	errorMessage: string = "";
	productlist:IProduct[]
	constructor(private ProductsService: ServicesService){

	}
	ngOnInit(): void {
       this.ProductsService.GetProduct().subscribe({
		next:data=>{
			this.productlist= data as IProduct[];
			console.log(this.productlist)



		  },
		  error:(err)=>{
		     this.isThereError=true;
			 this.errorMessage=" عفوآ لايوجد اى منتجات "
			 			 console.error("عفوآ لايوجد اى منتجات ")
		  }
	   })
	}

Delete(){
	alert("hello")
}
}
