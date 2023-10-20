import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/core/models/IProduct';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
	AddProduct(product: IProduct) {
		throw new Error('Method not implemented.');
	}
	baseURL = "http://localhost:3000/Product";


	products:IProduct[];


constructor(private httpclint:HttpClient) {
	this.products=[]
 }

gstAll(){
	return this.httpclint.get<IProduct[]>(this.baseURL);  // get all products
}

getProducts() {
    return this.httpclint.get<any[]>(this.baseURL);
  }




}
