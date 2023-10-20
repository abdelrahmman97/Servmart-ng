import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {


  displayStatus = 'none'; 


  toggleDisplay() {
    this.displayStatus = this.displayStatus === 'none' ? 'block' : 'none';
  }
  constructor(private router : Router) {

    
   }

  ngOnInit() {
  }
  navigateToOther() {
    this.router.navigate(['/Adedd']);
  }
}
