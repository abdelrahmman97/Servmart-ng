import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductService } from 'src/app/modules/vendor/services/Product/AppProductService.service';
import { AdminService } from '../../services/admin.service';
import { Services } from 'src/app/core/models/services';

@Component({
  selector: 'app-singleservice',
  templateUrl: './singleservice.component.html',
  styleUrls: ['./singleservice.component.css']
})
export class SingleserviceComponent implements OnInit{

  id:number=0;
  product: Services={} as Services;
  data:boolean=false;
  
  
  
  extractFirstFiveCharacters(longWord: string): string {
		return longWord.substring(0, 5);}
  
  constructor(private actic:ActivatedRoute,http:HttpClient,private productService: AdminService, private router:Router){
    this.actic.params.subscribe({
    next:(prams)=>{
      this.id=prams["id"]  ;
  
      console.log(prams)
  
      this.productService.getprofuct(prams["id"]).subscribe({
        next: (res) => {
          this.product = res[0];
          console.log('Product Data:', this.product);
        },
        error: (error) => {
          console.error('Error fetching product data:', error);
        }
      });
  
  
      }
    })}
    ngOnInit(): void {
  
      }
  
  
  
  
  
  
    }


