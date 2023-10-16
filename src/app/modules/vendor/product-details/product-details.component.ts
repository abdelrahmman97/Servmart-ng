import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AddProductService } from '../services/Product/AppProductService.service';
import { IProduct } from 'src/app/core/models/IProduct';
import { Product } from '../services/Product/Product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit{

id:number;
product:IProduct={} as IProduct;
data:boolean=false;





constructor(private actic:ActivatedRoute,http:HttpClient, private productsdetails:AddProductService, private router:Router){
	this.actic.params.subscribe({
	next:(prams)=>{
		this.id=prams["id"]  ;

		console.log(prams)

		this.productsdetails.getprofuct(prams["id"]).subscribe({
			next:(res)=>{
				this.product= res [0];
				console.log(this.product)

			}

		})
		

		}
	})}
	ngOnInit(): void {

		}






	}
	// getProducts(){
	// 	this.productsdetails.getprofuct(this.ProductID).subscribe({
	// 		next: (result)=>
	// 		{
	// 			this.product=result;
	// 		},
	// 	error(err) {
	// 		console.log("Error", err);
	// 	},

	// 	})
	// }




