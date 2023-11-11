import { Component,OnInit } from '@angular/core';
import { OrderService } from 'src/app/modules/customer/services/Cart/Order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  constructor(private orderServ:OrderService){
console.log("shhhhhhhhhhhhhhhhhhhhh")
  }
  DataList:any[]=[];
  p=1
  ngOnInit(): void {
    this.GetCustomerOrder()
  }

GetCustomerOrder(){
  this.orderServ.GetCustomerOrder().subscribe({
    next(data) {
      console.log(data);
				
				this.DataList=data as any
				console.log(this.DataList)
    },
  });
}

}
