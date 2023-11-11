import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/modules/customer/services/Cart/Cart.service';
import { OrderService } from 'src/app/modules/customer/services/Cart/Order.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component( {
	selector: 'app-order-list',
	templateUrl: './order-list.component.html',
	styleUrls: ['./order-list.component.css']
} )
export class OrderListComponent implements OnInit {
ListOfOrder:any[]=[]
p=1
orderForm: FormGroup;

orderstatus:any[]=["تمت بنجاح","انتظار","الغاء"]
	constructor(private fb: FormBuilder, private router: Router,private orderServ:OrderService ) {
		console.log("hyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
		this.AllOrder()
	 }
	
	navigatetoSingelOrder() {
		this.router.navigate( ['/Singel-Order'] );
		
		
	}
	
	
	AllOrder(){
		this.orderServ.GetVendorOrder().subscribe({
			next:(data)=>{
				console.log(data);
				
				this.ListOfOrder=data as any
				console.log(this.ListOfOrder)
			},
		})
	}
	

	
	ngOnInit() {
		
		this.orderForm = this.fb.group({
			newStatus: ['', Validators.required]
		  });
		this.AllOrder()
		
	}
	












}

