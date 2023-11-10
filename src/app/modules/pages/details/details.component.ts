import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ServicesService } from '../services.service';
import { IService } from 'src/app/core/models/Service/IService';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component( {
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: [ './details.component.css' ],
} )
export class DetailsComponent implements OnInit {
	cartitem: object = {};
	detilslist: IService[] = [];
	id: string = '';
	constructor (
		public ServApi: ServicesService,
		public active: ActivatedRoute,
		private toastr: ToastrService
	) {
		this.id = active.snapshot.params[ 'productID' ];
		console.log( this.id );
	}
	product!: IProduct;
	AllProduct: IProduct[] = [];

	cart!: IProduct;

	ngOnInit (): void {
		this.getSmiller( this.id );

		this.cartitem = {
			productID: this.product.productID,
			unitPrice: this.product.unitPrice,
			stoke: this.product.stoke,
			picsURL: this.product.picsURL,
			description: this.product.description,
		};
	}

	getSmiller ( id: string ) {
		this.ServApi.GetProduct().subscribe( {
			next: ( i ) => ( this.AllProduct = i.slice( 0, 3 ) as IProduct[] ),
		} );

		this.ServApi.Details( id ).subscribe( {
			next: ( data ) => ( this.product = data as IProduct ),
		} );
		console.log( this.product );
		console.log( this.id );
	}

	AddToCart ( id: string ) {
		this.ServApi.AddCart( id ).subscribe( {
			next: ( data ) => {
				console.log( data );
				this.toastr.info( "This Product Added Successfully to your Cart" )
			},
			error: ( data ) => {
				console.log( 'errors' );
				this.toastr.warning( "Sorry This Product Can't  be Added to your Cart either This Product is already to your Cart or You have a problem with internet access" )


			},
		} );
	}
}
