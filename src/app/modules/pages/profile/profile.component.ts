import { Component } from '@angular/core';
import { ServiceService } from '../../services-provider/services/service.service';
import { PaginationResponse } from '../services/interfaces/PaginationResponse';
import { Item } from '../services/interfaces/Item';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from '../../auth/services/auth/Auth.service';
import { ILoginResualtModel } from 'src/app/core/models/Auth/ILoginResualtModel';

@Component( {
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
} )
export class ProfileComponent {

	constructor( private auth: AuthService, private apiService: ServiceService, private sanitizer: DomSanitizer ) {
	}

	isCustomer: boolean = this.auth.isCustomer();
	isVendor: boolean = this.auth.isVendor();
	isServiceProvider: boolean = this.auth.isServiceProvider();
	isAdmin: boolean = this.auth.isAdmin();

	items: Item[] = [];
	currentPage = 1;
	pageSize: number;
	count: number;

	ngOnInit(): void {

		var name = '';
		const categoryName = ''
		const expectedSalary = 0;
		const orderBy = 'ExpectedSalary';
		const isAscending = false;
		const pageSize = 6;
		const pageIndex = this.currentPage;

		this.apiService.getItems( name, categoryName, expectedSalary, orderBy, isAscending, pageSize, pageIndex )
			.subscribe( ( response: PaginationResponse ) => {

				this.items = response.data.$values;

				this.currentPage = response.pageIndex;
				this.pageSize = response.pageSize;
				this.count = response.count;
				this.calculateTotalPages( this.count );
				console.log( this.totalPages );
				console.log( this.currentPage );
				console.log( this.pageSize );

				console.log( this.items );
			} );
	}

	transform( file: string ): any {

		const binaryString = window.atob( file );
		const len = binaryString.length;
		const bytes = new Uint8Array( len );
		for ( let i = 0; i < len; i++ ) {
			bytes[i] = binaryString.charCodeAt( i );
		}

		// Create a Blob from the Uint8Array
		const blob = new Blob( [bytes], { type: 'image/png' } );

		// Now you can use this blob to create a safe URL for the img tag
		const objectURL = URL.createObjectURL( blob );
		return this.sanitizer.bypassSecurityTrustUrl( objectURL );
	}

	// this.calculateTotalPages(vendors);
	// this.updateVisibleData(vendors);
	// getImageUrl(file: any): SafeUrl {
	//   const base64Image = btoa(file.fileContents);
	//   const imageUrl = `data:${file.contentType};base64,${base64Image}`;
	//   return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
	// }
	// uploadImage(file: File): Promise<string> {
	//   return new Promise((resolve, reject) => {
	//     const formData: FormData = new FormData();
	//     formData.append('image', file, file.name);

	//     // Send a POST request to the server to handle file upload
	//     // You can use HttpClient to send the request to your backend API

	//     // For demonstration purposes, let's assume the image is uploaded successfully
	//     // and the server returns the image name
	//     const imageName = 'example-image-name.jpg';

	//     // Save the image to assets/images folder locally
	//     const imageUrl = `.assets/images/${imageName}`;

	//     // Resolve the promise with the image URL
	//     resolve(imageUrl);
	//   });
	// }

	totalPages: number;
	visibleData: any[];

	calculateTotalPages( count: number ): void {
		this.totalPages = Math.ceil( count / this.pageSize );
	}



	onPageChange( pageNumber: number ): void {
		this.currentPage = pageNumber;
		this.ngOnInit();
	}

	getPageNumbers(): number[] {
		return Array.from( { length: this.totalPages }, ( _, index ) => index + 1 );
	}

	onPreviousClick(): void {
		if ( this.currentPage > 1 ) {
			this.currentPage--;
			this.ngOnInit();
		}
	}

	onNextClick(): void {
		if ( this.currentPage < this.totalPages ) {
			this.currentPage++;
			this.ngOnInit();
		}
	}


}


