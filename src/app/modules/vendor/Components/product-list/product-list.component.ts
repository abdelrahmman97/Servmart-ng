import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/IProduct';
import { AddProductService } from '../../services/Product/AppProductService.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit{

	isThereError: boolean = false;
	errorMessage: string = "";
	productlist:IProduct[]=[]
	constructor(private ProductsService: AddProductService ){
		
	}
	ngOnInit(): void {
       this.ProductsService.gstAll().subscribe({
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


}
