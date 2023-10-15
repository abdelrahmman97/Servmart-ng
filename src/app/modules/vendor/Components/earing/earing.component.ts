import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EarningService } from '../../services/earning/earning.service';
import { PaymentStatus } from 'src/app/core/Enums/PaymentStatus.enum';
import { map } from 'rxjs/operators'; // Import the map operator
// import jsPDF from 'jspdf';

@Component( {
	selector: 'app-earing',
	templateUrl: './earing.component.html',
	styleUrls: ['./earing.component.css']
} )
export class EaringComponent {

	day: number;
	month: number;
	wait: number;

	paymentList: Observable<any[]>;

	generatePDF( Payments: any ) {
		// const doc = new jsPDF();

		// doc.text( `Payment from Sermart`, 50, 10 );
		// doc.text( `Name:`, 50, 20 );
		// doc.text( `Payment ID: ${Payments.id}`, 10, 40 );
		// doc.text( `Date: ${Payments.date}`, 10, 50 );
		// doc.text( `Amount: ${Payments.amount}`, 10, 60 );

		// doc.save( 'payment_info.pdf' );
	}


	getStatusClass( status ): string {
		if ( status === 'تمت' ) {
			return 'badge bg-success bg-opacity-10 text-success';
		} else if ( status === 'الغيت' ) {
			return 'badge bg-danger bg-opacity-10 text-danger';
		} else if ( status === 'انتظار' ) {
			return 'badge bg-orange bg-opacity-10 text-orange';
		}
		else {
			return '';
		}
	}



	constructor( private EarningService: EarningService ) {

	}

	ngOnInit(): void {
		this.paymentList = this.EarningService.getData().pipe(
			map( data => {
				return data.map( item => {
					return {
						...item,
						status: this.getStatusString( item.status )
					};
				} );
			} )
		);
		this.paymentList.subscribe( vendors => {
			console.log( 'Received vendors data:', vendors );

			this.EarningService.getday().subscribe(
				( data: number ) => {
					this.day = data
				}
			)
			this.EarningService.getmonth().subscribe(
				( data: number ) => {
					this.month = data
				}
			)
			this.EarningService.getwait().subscribe(
				( data: number ) => {
					this.wait = data
				}
			)
			this.calculateTotalPages( vendors );
			this.updateVisibleData( vendors );
		} );
	}


	getStatusString( statusCode: number ): string {
		switch ( statusCode ) {
			case PaymentStatus.Pending:
				return 'انتظار';
			case PaymentStatus.Paid:
				return 'تمت';
			case PaymentStatus.Cancelled:
				return 'الغيت';
			default:
				return 'Unknown';
		}
	}


	pageSize = 5;
	currentPage = 1;
	totalPages: number;
	visibleData: any[];

	calculateTotalPages( vendors: any[] ): void {
		this.totalPages = Math.ceil( vendors.length / this.pageSize );
	}

	updateVisibleData( vendors: any[] ): void {
		const startIndex = ( this.currentPage - 1 ) * this.pageSize;
		const endIndex = startIndex + this.pageSize;
		this.visibleData = vendors.slice( startIndex, endIndex );
	}

	onPageChange( pageNumber: number ): void {
		this.currentPage = pageNumber;
		this.paymentList.subscribe( vendors => {
			this.updateVisibleData( vendors );
		} );
	}

	getPageNumbers(): number[] {
		return Array.from( { length: this.totalPages }, ( _, index ) => index + 1 );
	}

	onPreviousClick(): void {
		if ( this.currentPage > 1 ) {
			this.currentPage--;
			this.paymentList.subscribe( vendors => {
				this.updateVisibleData( vendors );
			} );
		}
	}

	onNextClick(): void {
		if ( this.currentPage < this.totalPages ) {
			this.currentPage++;
			this.paymentList.subscribe( vendors => {
				this.updateVisibleData( vendors );
			} );
		}
	}
}
