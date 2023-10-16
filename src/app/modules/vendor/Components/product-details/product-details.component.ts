import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProductService } from '../../services/Product/AppProductService.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
id:number;
product:any;
check:boolean=false;
constructor(private actic:ActivatedRoute,bs:AddProductService){
	this.actic.params.subscribe(
		{
			next: (value) => { this.id = value['id'];
		console.log(this.id) },
})

this.product=bs.getprofuct(this.id)
console.log(this.product)
if(!this.product)
this.check=true
}
}
