import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singel-order',
  templateUrl: './singel-order.component.html',
  styleUrls: ['./singel-order.component.css']
})
export class SingelOrderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigateToOrderlist() {
    this.router.navigate(['/Order-List']);
  }
}
