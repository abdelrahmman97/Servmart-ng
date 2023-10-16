import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';
import { DataService } from '../../services/search-vendors/Data.service';
import { Serprovider } from './serprovider';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-search-vendors',
  templateUrl: './search-vendors.component.html',
  styleUrls: ['./search-vendors.component.css']
})

export class SearchVendorsComponent {
 

//   dastaList = [
//     { FName: 'Ahmed', LName: 'Ali',Address: 'Cairo , Egypt',  ProfilePic: './../assets/images/08.jpg', TotalServices: 5, Rate: 4.3 },
//  ];
  // vendorsList: Observable<any> = of(this.dastaList);

  vendorsList: Observable<Serprovider[]>;

  constructor(private dataService: DataService) {
    
      
    }
    
  
  searchInput: string = '';

  onInputChange(): void {
    console.log('Input Value:', this.searchInput);
  }
  onSearch(): void {
    console.log('Input Value:', this.searchInput);

  }
  selectedOption: string;
  onOptionChange(): void {
    console.log('Selected Option:', this.selectedOption);
    // Perform actions based on the selected option
  }
  

  ngOnInit(): void {
     this.vendorsList = this.dataService.getData();
    this.vendorsList.subscribe(vendors => {
      console.log('Received vendors data:', vendors);

      this.calculateTotalPages(vendors);
      this.updateVisibleData(vendors);
    });
  }
 
  pageSize = 8;
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



