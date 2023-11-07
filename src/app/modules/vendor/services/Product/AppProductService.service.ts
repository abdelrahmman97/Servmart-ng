import { EventEmitter, Injectable } from '@angular/core';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProductCategory } from 'src/app/core/models/Product/IProductCategory';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
	cartData= new EventEmitter<IProduct[]|[]>()
	AddProduct(product: IProduct) {
		throw new Error('Method not implemented.');
	}
	baseURL = "http://localhost:3000/product";
	urlApi="https://localhost:7013/api/Product";
	catgory:string="https://localhost:7013/ProductCatgorei";



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

AddProductAPi(data:any):Observable<any>{
	console.log(data);
	
return this.httpclint.post(this.urlApi, data)
}
GetCagory():Observable<any>{
return this.httpclint.get<IProductCategory[]>(this.catgory)
}



}
