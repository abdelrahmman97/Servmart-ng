import { Component, OnInit } from '@angular/core';
import { Iprodect } from './iprodect';
import { Ictaegry } from './ictaegry';
import { AddProductService } from 'src/app/modules/vendor/services/Product/AppProductService.service';

@Component({
  selector: 'app-DashBord',
  templateUrl: './DashBord.component.html',
  styleUrls: ['./DashBord.component.css']
})
export class DashBordComponent implements OnInit  {
  catlist: Ictaegry[];
  protects:Iprodect[];
  products: any[] = [];
  protectedlisteofcat:Iprodect[]=[];
  selectedcatid:number=0;
  ordertotalprice:number=0;
  isThereError: boolean;
  errorMessage: string;
  
  constructor(private productService : AddProductService) { 
    // this.protects=[
    //   {id: 100,name:"labtob",price:10000,quntity:30,categoryid:1},
    //   {id: 101,name:"Phone",price:50000,quntity:2,categoryid:2},
    //   {id: 102,name:"DeskTop",price:20000,quntity:40,categoryid:3},
    //   {id: 103,name:"watch",price:65000,quntity:15,categoryid:4},
    //   {id: 104,name:"HeadPhone",price:22000,quntity:11,categoryid:5},

    // ];
    this.protectedlisteofcat=this.protects;   
    console.log(this.protectedlisteofcat) 
  }

//   ngOnInit() {
//     this.productService.getProducts().subscribe((data) => {
//       this.products = data;
//       console.log(this.products)
//     });

//   }


  ngOnInit(): void {
		this.productService.getProducts().subscribe(
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
