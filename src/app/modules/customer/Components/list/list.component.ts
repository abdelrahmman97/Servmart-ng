import { Component, OnInit } from '@angular/core';

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
  constructor() {

    
   }

  ngOnInit() {
  }

}
