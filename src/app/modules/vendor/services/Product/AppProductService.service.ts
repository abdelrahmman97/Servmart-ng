import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/core/models/IProduct';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

constructor() { }

  Products:IProduct[] = [];

  AddProduct(product:IProduct){
    this.Products.push(product)
  }

}
