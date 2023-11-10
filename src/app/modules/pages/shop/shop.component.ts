import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IService } from 'src/app/core/models/Service/IService';
import { ServicesService } from '../services.service';
import { IProduct } from 'src/app/core/models/Product/IProduct';
import { IProductCategory } from 'src/app/core/models/Product/IProductCategory';

@Component( {
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: [ './shop.component.css' ],
} )
export class ShopComponent {
	SearchInput = '';
	Price = 300;
	rates = 0;
	P = 1;

	Rate: any[] = [
		{ id: 1, value: 1 },
		{ id: 2, value: 2 },
		{ id: 3, value: 3 },
		{ id: 4, value: 4 },
		{ id: 5, value: 5 },
	];
	categorylist: any[] = [
		{ id: 1, Name: 'كهرباء' },
		{ id: 2, Name: 'ماء' },
		{ id: 3, Name: 'اخشاب' },
		{ id: 4, Name: 'دهانات' },
		{ id: 5, Name: 'الوان' },
		{ id: 6, Name: 'اثاث' },
		{ id: 7, Name: 'نجارة' },
		{ id: 8, Name: 'الكترونيات' },
		{ id: 9, Name: 'تصليح مياه' },
		{ id: 10, Name: 'اداوات كهربية' },
	];
	SelectedCategory: any[] = [];
	shoplist: IProduct[] = [];

	constructor ( public get: ServicesService ) { }

	ngOnInit (): void {
		this.GetProduct();
	}

	GetProduct () {
		this.get.GetProduct().subscribe( ( i ) => {
			this.shoplist = i as IProduct[];
			console.log( this.shoplist );
		} );
	}

	select ( id: any, ev: any ) {
		if ( ev.target.checked ) {
			this.SelectedCategory.push( id );
		} else {
			this.SelectedCategory.splice( this.SelectedCategory.indexOf( id ), 1 );
		}
		console.log( this.SelectedCategory );
	}

	removeFilter () {
		this.SelectedCategory = [];
		this.Price = 0;
		this.SearchInput = '';
		this.rates = 0;
	}

	click ( event: any ) {
		if ( event.target ) {
			console.log( event.target.value );
		}
	}

	filter () {
		console.log( this.SelectedCategory );
		console.log( this.Price );
		console.log( this.SearchInput );
	}

	show (): void {
		var GroupCard = document.getElementById( 'CardGroup' );
		var Sitebar = document.getElementById( 'SiteBar' );
		var x = document.getElementById( 'X' );
		var contentcard = document.getElementsByName( 'contentcard' );
		var elements = document.getElementsByName( 'elements' );
		var filter = document.getElementById( 'filterIcon' );
		Sitebar?.classList.remove( 'd-none' );
		GroupCard?.classList.remove( 'col-lg-12' );
		GroupCard?.classList.add( 'col-lg-8' );
		contentcard?.forEach( ( i ) => {
			i.classList.remove( 'col-lg-4' );
			i.classList.add( 'col-lg-12' );
			i.classList.replace( 'x', 'y' );
		} );
		elements?.forEach( ( i ) => {
			i.classList.add( 'd-flex' );
		} );
		filter?.classList.add( 'd-none' );
		x?.classList.remove( 'justify-content-between' );
		x?.classList.add( 'justify-content-end' );
	}

	close () {
		var GroupCard = document.getElementById( 'CardGroup' );
		var Sitebar = document.getElementById( 'SiteBar' );
		var contentcard = document.getElementsByName( 'contentcard' );
		var elements = document.getElementsByName( 'elements' );
		var filter = document.getElementById( 'filterIcon' );
		var x = document.getElementById( 'X' );
		Sitebar?.classList.add( 'd-none' );
		GroupCard?.classList.remove( 'col-lg-8' );
		GroupCard?.classList.add( 'col-lg-12' );
		contentcard?.forEach( ( i ) => {
			i.classList.add( 'col-lg-4' );
			i.classList.remove( 'col-lg-12' );
		} );
		elements?.forEach( ( i ) => {
			i.classList.remove( 'd-flex' );
		} );
		filter?.classList.remove( 'd-none' );
		x?.classList.add( 'justify-content-between' );
		x?.classList.remove( 'justify-content-end' );
	}
}
