import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { IProductCategory } from 'src/app/core/models/Product/IProductCategory';
import { AddProductService } from 'src/app/modules/vendor/services/Product/AppProductService.service';
import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/User/IUser';

@Component( {
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
} )
export class DashboardComponent implements OnInit {

	vendorsList: Observable<any[]>;
	selectedcatid: number ;
  product: number ;
  isThereError: boolean = false;
	errorMessage: string = "";

	protected: Observable<any[]>;
  user: number ;
  Userall:any[]=[];


	users: Observable<any[]>;

  constructor( private productService: AdminService ,private productServic: AddProductService) {
		
	}



	ngOnInit(): void {
		
		this.vendorsList = this.productService.gstAllserviec();
	
    this.vendorsList.subscribe(data => {
      this.selectedcatid = data.length;
    });

    this.protected=this.productServic.gstAll();
    this.protected.subscribe(data => {
      this.product = data.length;
    });
    this.users=this.productService.gstAllusers();
    this.users.subscribe(data => {
      this.user = data.length;
	 
    });
    this.Userlist();
}
  Userlist(){
    this.productService.gstAllusers().subscribe({
      next: (data) => {
        this.Userall = data as IUser[];
        console.log(data);
      },
				error: error => {
					this.isThereError = true;
					this.errorMessage = "لقد حدث خطأ غير معروف من فضلك حاول مرة أخرى في وقت لاحق";
					// this.errorMessage = error.statusText;
					console.log( error );
				}

    })
  }
}