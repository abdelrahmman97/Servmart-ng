import { Component, OnInit } from '@angular/core';
import{Validators,FormGroup,FormControl} from "@angular/forms"
import { ServicesService } from '../services.service';
import { IService } from 'src/app/core/models/IService';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/core/models/IProduct';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
// form:FormGroup=new FormGroup({
//   'textArea':new FormControl(null,[Validators.required,Validators.maxLength(10)])
// })
detilslist:IService []=[]
id:string=''
constructor(public ServApi:ServicesService,public active:ActivatedRoute){
this.id=active.snapshot.params['productID']
}
product!:IProduct;
AllProduct:IProduct[]=[]
Display(){
  
  this.ServApi.Details(this.id).subscribe(i=>{
    this.product=i as IProduct

  })
  console.log(this.product)
  console.log(this.id)
}

ngOnInit(): void {
 this.Display()
 this.ServApi.GetProduct().subscribe(i=>{
this.AllProduct=i.slice(0,3) as IProduct[]
console.log(this.AllProduct)
 })
}
}

