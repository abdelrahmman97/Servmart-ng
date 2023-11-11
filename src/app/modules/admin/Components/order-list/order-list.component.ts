import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { IProductCategory } from 'src/app/core/models/Product/IProductCategory';
import { AddProductService } from 'src/app/modules/vendor/services/Product/AppProductService.service';

@Component( {
	selector: 'app-order-list',
	templateUrl: './order-list.component.html',
	styleUrls: ['./order-list.component.css']
} )
export class OrderListComponent implements OnInit {

	catlist: IProductCategory[];
	protects: IProduct[];
	vendorsList: Observable<any[]>;
	protectedlisteofcat: IProduct[] = [];
	selectedcatid: number = 0;
	ordertotalprice: number = 0;
	isThereError: boolean;
	errorMessage: string;

	constructor( private productService: AddProductService,private http:HttpClient  ) {
		
		this.protectedlisteofcat = this.protects;
	}

  

  deleteUser(userId: string) {
    this.http.delete(`https://localhost:7013/DeleteProduct/${userId}`).subscribe(
      () => {
        // Update the user list after deletion
        this.vendorsList = this.productService.gstAll();
        this.vendorsList.subscribe(vendors => {
          console.log('Received vendors data:', vendors);
      
          this.calculateTotalPages(vendors);
          this.updateVisibleData(vendors);
        });
      },
      error => {
        console.error('Error deleting user:', error);
        // Handle error here (e.g., display an error message)
      }
    );
  }


	ngOnInit(): void {
		
		this.vendorsList = this.productService.gstAll();
		this.vendorsList.subscribe(vendors => {
		  console.log('Received vendors data:', vendors);
	
		  this.calculateTotalPages(vendors);
		  this.updateVisibleData(vendors);
	});}
	extractFirstFiveCharacters(longWord: string): string {
		return longWord.substring(0, 5);}
	
		pageSize = 1;
  currentPage = 1;
  totalPages: number; 
  visibleData: any[] ;

  calculateTotalPages(vendors: any[]): void {
    this.totalPages = Math.ceil(vendors.length / this.pageSize);
  }

  updateVisibleData(vendors: any[]): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.visibleData = vendors.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.vendorsList.subscribe(vendors => {
      this.updateVisibleData(vendors);
    });
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  onPreviousClick(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.vendorsList.subscribe(vendors => {
        this.updateVisibleData(vendors);
      });
    }
  }

  onNextClick(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.vendorsList.subscribe(vendors => {
        this.updateVisibleData(vendors);
      });
    }
  }
}
