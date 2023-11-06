import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IService } from 'src/app/core/models/IService';
import { IProduct } from 'src/app/core/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  GetAllProduct ="https://localhost:7013/api/Product";
 

  constructor(public http: HttpClient) 
  { }

  GetProduct():Observable<any>{
    // return this.http.get<IService[]>(this.services);
    return this.http.get<IProduct[]>(this.GetAllProduct)
  }
  Details(id:string):Observable<any>{
return this.http.get<IProduct>(`https://localhost:7013/api/Product/${id}`);
  }
}
