import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Adedd',
  templateUrl: './Adedd.component.html',
  styleUrls: ['./Adedd.component.css']
})
export class AdeddComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  navigate() {
    this.router.navigate(['/list']);
  }

navigatetoHome() {
  this.router.navigate(['/home']);
  }
}
