import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { Observable } from 'rxjs';
import { ICartProduct } from 'src/app/core/models/ICart';

@Injectable({
	providedIn: 'root',
})
export class OrderService {
	private order = 'https://localhost:7013/api/Order/';
	constructor(private httpClient: HttpClient) {}

	GetCustomerOrder():Observable<any>{
		return  this.httpClient.get(this.order+"GetCustomerOrder")
	}
	GetVendorOrder():Observable<any>{
		return  this.httpClient.get(this.order+"GetVendorOrder")
	}
	MakeOrder(data:any): Observable<any> {
		return this.httpClient.post<ICartProduct[]>(this.order,data);
	}
	// public Remove( id: string ) {
	// 	return this.httpClient.delete( `${this.BaseURL}/${id}` )
	// }

 StatusChanges(orderId:any,newStatus:string):Observable<any>{
return this.httpClient.patch<any>(`https://localhost:7013/api/Order?orderId=${orderId}&newStatus=${newStatus}`,null)
 }
}
