import { EventEmitter, Injectable } from '@angular/core';
import { IProduct } from 'src/app/core/models/IProduct';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
	cartData= new EventEmitter<IProduct[]|[]>()
	AddProduct(product: IProduct) {
		throw new Error('Method not implemented.');
	}
	baseURL = "http://localhost:3000/product";


	products:IProduct[];


constructor(private httpclint:HttpClient) {
	this.products=[]
 }

gstAll(){
	return this.httpclint.get<IProduct[]>(this.baseURL);  // get all products
}
getprofuct(id:number)
{
	return   this.httpclint.get<IProduct>(`${this.baseURL}?ID=${id}`);    /// get product by id


}



}
