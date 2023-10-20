import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isCustomer(): boolean {

    const item = localStorage.getItem('Role');
    if(JSON.parse(item)==0)
    return true;
    else
    return false;

  }

  isVendor(): boolean {
    const item = localStorage.getItem('Role');
    if(JSON.parse(item)==1)
    return true;
    else
    return false;
  }
  isAdmin(): boolean {
    const item = localStorage.getItem('Role');
    if(JSON.parse(item)==3)
    return true;
    else
    return false;
  }
  isserviceprovider(): boolean {
    const item = localStorage.getItem('Role');
    if(JSON.parse(item)==2)
    return true;
    else
    return false;
  }
}
