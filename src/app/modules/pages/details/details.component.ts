import { Component,OnInit } from '@angular/core';
import{Validators,FormGroup,FormControl} from "@angular/forms"
import { ServicesService } from '../services.service';
import { IService } from 'src/app/core/models/IService';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl:'./details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detilslist:IService []=[]
  id:string=''
  constructor(public ServApi:ServicesService,public active:ActivatedRoute){
  this.id=active.snapshot.params['productID']
  }
  product!:IProduct;
  AllProduct:IProduct[]=[]
  // Display(){
    
  //   this.ServApi.Details(this.id).subscribe({
  //     next:(data)=>this.product=data as IProduct
  
  //   })
  //   console.log(this.product)
  //   console.log(this.id)
  // }
  
  ngOnInit(): void {
    
   this.getSmiller(this.id)
  }

  getSmiller(id: string){
    this.ServApi.GetProduct().subscribe({
      
      next:(i)=> this.AllProduct=i.slice(0,3) as IProduct[]
      ,
       
        })

        
        this.ServApi.Details(id).subscribe({
          next:(data)=>this.product=data as IProduct
      
        })
        console.log(this.product)
        console.log(this.id)
  }

}
