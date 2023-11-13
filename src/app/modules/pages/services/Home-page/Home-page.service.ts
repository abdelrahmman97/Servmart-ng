import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HomePageService implements OnInit {
  

constructor ( private Http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
