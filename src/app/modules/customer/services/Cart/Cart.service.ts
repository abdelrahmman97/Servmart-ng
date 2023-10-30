import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/core/models/Product/IProduct';

@Injectable( {
	providedIn: 'root'
} )
export class CartService {

	private BaseURL = "http://localhost:3000/Cart"
	constructor( private httpClient: HttpClient ) { }

	public GetCart( id: string ) {
		return this.httpClient.get( this.BaseURL );
	}

	public Remove( id: string ) {
		return this.httpClient.delete( `${this.BaseURL}/${id}` )
	}

}
