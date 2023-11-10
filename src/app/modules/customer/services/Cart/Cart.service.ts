import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { Observable } from 'rxjs';
import { ICartProduct } from 'src/app/core/models/ICart';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	private CartItem = 'https://localhost:7013/api/CartItem/';
	constructor(private httpClient: HttpClient) {}

	GetCart(): Observable<any> {
		return this.httpClient.get<ICartProduct[]>(this.CartItem);
	}
	Empty(): Observable<any> {
		return this.httpClient.delete<ICartProduct[]>(this.CartItem+"Empty");
	}
	Delete(id: number): Observable<any> {
		return this.httpClient.delete<ICartProduct[]>(this.CartItem+id);
	}
	UpdateCart(CartItemID: number, Quantity: number): Observable<any> {
		return this.httpClient.patch<ICartProduct[]>(this.CartItem, {
			CartItemID: CartItemID,
			Quantity: Quantity,
		});
	}

	// public Remove( id: string ) {
	// 	return this.httpClient.delete( `${this.BaseURL}/${id}` )
	// }
}
