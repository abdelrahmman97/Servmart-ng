import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { HomePageService } from '../services/Home-page/Home-page.service';
import { IService } from 'src/app/core/models/Service/IService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Productlist:IProduct[]=[];
  ServiceList:IService[]=[];
  currentPage: number = 1;
	pageSize: number = 3;
  isThereError: boolean = false;
	errorMessage: string = "";
	constructor ( private Homeservice: HomePageService, private Http: HttpClient ) {}
	ngOnInit(): void {
		this.getproduct(this.pageSize,this.currentPage)
    this.getallService(this.pageSize,this.currentPage)
   	}

    getproduct(Page:number,pagesize:number){

      this.Homeservice.getallProduct(pagesize,Page).subscribe({
        next:data=>{
          this.Productlist= data as IProduct[];
          console.log(data);

       },
       error: error => {
         this.isThereError = true;
         this.errorMessage = "لقد حدث خطأ غير معروف من فضلك حاول مرة أخرى في وقت لاحق";
         this.errorMessage = error.statusText;
         console.log( error );
       }
      })
    }
    getallService(Ipage:number,IPageSize){
      this.Homeservice.getallservices(Ipage,IPageSize).subscribe({
        next:data=>{
          this.ServiceList=data as IService[];
          console.log(data);
        },
        error: error => {
          this.isThereError = true;
          this.errorMessage = "لقد حدث خطأ غير معروف من فضلك حاول مرة أخرى في وقت لاحق";
          this.errorMessage = error.statusText;
          console.log( error );
        }
      })
    }

}
