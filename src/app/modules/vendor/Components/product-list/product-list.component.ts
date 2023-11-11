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
	constructor(private ProductsService: ServicesService,public up:AddProductService){

	}

AllProduct(){
		this.ProductsService.Getproductvendor().subscribe({
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
	ngOnInit(): void {
		this.AllProduct()
	}

Delete(id:string){
	this.ProductsService.DeleteProduct(id).subscribe({
		next(value) {
			
		},


	})

	this.AllProduct()
}
update(id:string){
	this.ProductsService.Details(id).subscribe(data => {
		this.productlist=data
		console.log(this.productlist)
	})
		}
}
