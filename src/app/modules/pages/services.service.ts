import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IService } from 'src/app/core/models/Service/IService';
import { IProduct } from 'src/app/core/models/Product/IProduct';

@Injectable({
	providedIn: 'root',
})
export class ServicesService {
	GetAllProduct = 'https://localhost:7013/GetAllProduct';

	constructor(public http: HttpClient) {}

	GetProduct(): Observable<any> {
		// return this.http.get<IService[]>(this.services);
		return this.http.get<IProduct[]>(this.GetAllProduct);
	}
	Details(id: string): Observable<any> {
		return this.http.get<IProduct>(
			`https://localhost:7013/GetProductById/${id}`
		);
	}

	Getproductvendor(): Observable<any> {
		return this.http.get<IProduct[]>(
			`https://localhost:7013/GetAllUserProduct`
		);
	}

	AddCart(id: string): Observable<any> {
		return this.http.post(
			`https://localhost:7013/api/CartItem/?productid=${id}`,
			{}
		);
	}
	DeleteProduct(id: string): Observable<any> {
		return this.http.delete<IProduct>(
			`https://localhost:7013/DeleteProduct/${id}`
		);
	}

}
