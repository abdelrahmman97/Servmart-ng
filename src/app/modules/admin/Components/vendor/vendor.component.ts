import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit  {

	vendorsList: Observable<any[]>;
	selectedcatid: number = 0;
	ordertotalprice: number = 0;
	isThereError: boolean;
	errorMessage: string;

	constructor( private productService: AdminService,private http:HttpClient ) {
		
	}

  deleteUser(userId: string) {
    this.http.delete(`https://localhost:7013/api/User?Id=${userId}`).subscribe(
      () => {
        // Update the user list after deletion
        this.vendorsList = this.productService.GetAllVendors();
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
		
		this.vendorsList = this.productService.GetAllVendors();
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

