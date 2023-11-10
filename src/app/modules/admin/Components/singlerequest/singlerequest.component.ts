import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singlerequest',
  templateUrl: './singlerequest.component.html',
  styleUrls: ['./singlerequest.component.css']
})
export class SinglerequestComponent implements OnInit {

  id:number=0;
  product: any={} ;
  data:boolean=false;
  
  
  
  extractFirstFiveCharacters(longWord: string): string {
		return longWord.substring(0, 5);}
  
  constructor(private actic:ActivatedRoute,private productService: AdminService, private router:Router){
    this.actic.params.subscribe({
    next:(prams)=>{
      this.id=prams["id"]  ;
  
      console.log(prams)
  
      this.productService.getrequest(prams["id"]).subscribe({
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

