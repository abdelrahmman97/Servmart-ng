import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { AddProductService } from 'src/app/modules/vendor/services/Product/AppProductService.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {

  id:number=0;
  product:IProduct={} as IProduct;
  data:boolean=false;
  
  
  
  extractFirstFiveCharacters(longWord: string): string {
		return longWord.substring(0, 5);}
  
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