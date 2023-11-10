import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
	baseURL = "https://localhost:7013/api/Service/GetAllServices";
	request = "https://localhost:7013/api/Request/GetAllrequest";
  user = "https://localhost:7013/api/User/GetAllCustomer";
  vendoe ="https://localhost:7013/api/User/GetAllVendor";
  servprovider = "https://localhost:7013/api/User/GetAllUser";
  users="https://localhost:7013/api/User/GetAllUsers";
  singlerequset="https://localhost:7013/api/Request/Getrequest";
  constructor(private httpclint:HttpClient) {
   }
   gstAllserviec(){
    return this.httpclint.get<any[]>(this.baseURL);  // get all products
  }
  gstAllrequest(){
    return this.httpclint.get<any[]>(this.request);  // get all products
  }
  gstAlluser(){
    return this.httpclint.get<any[]>(this.user);  // get all products
  }
  gstAllusers(){
    return this.httpclint.get<any[]>(this.users);  // get all products
  }
  gstAllvendor(){
    return this.httpclint.get<any[]>(this.vendoe);  // get all products
  }
  gstAllservprovider(){
    return this.httpclint.get<any[]>(this.servprovider);  // get all products
  }
  getprofuct(id:number)
{
	return   this.httpclint.get<any>(`${this.baseURL}?ID=${id}`);    /// get product by id
}
getrequest(id:number)
{
	return   this.httpclint.get<any>(`${this.request}?ID=${id}`);    /// get product by id
}
}
