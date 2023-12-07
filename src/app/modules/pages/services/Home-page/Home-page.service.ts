import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/app/core/environments/environment';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { IService } from 'src/app/core/models/Service/IService';
@Injectable({
  providedIn: 'root'
})
export class HomePageService implements OnInit {

  private product?:IProduct = { } as IProduct;



constructor ( private Http:HttpClient) { }
  ngOnInit(): void {
  }
  getallProduct(page:number,pagesize:number){
    return this.Http.get<IProduct[]>(`https://localhost:7013/GetAllProduct?page=${ page }&pageSize=${ pagesize }`)
  }
  getallservices(page:number,pagesize:number){
    return this.Http.get<IService[]>(`${environment.apiUrl}/GetAllServices?page=${page}&pageSize=${pagesize}`)
  }

}
