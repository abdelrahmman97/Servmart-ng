import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartArray:any[]=[{id:1,Name: 'John',},{id:2,Name: "John2"},{id:3,Name:"Johan3"}  ]

number;

showNumber(){
  this.number*25
}
select(id:number) {
  if(this.cartArray){

    this.cartArray.find(i=>i.id)==id;
    this.number*25
    console.log(this.cartArray.values)
  } 
  else{
    this.cartArray.splice(this.cartArray.indexOf(id), 1);
  } 
 console.log( this.cartArray)
}
remove(){
 this.number=0
}
OnInit(){
  this.showNumber();
}



}
