import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
	SearchInput = '';
	Price = 300;
	rates = 0;



	

	Rate:any[]=[{id:1,value:1},{id:2,value:2},{id:3,value:3},{id:4,value:4},{id:5,value:5}]
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
	shoplist: any[] = [
		{
			id: 1,
			Name: 'خدمة الكهرباء',
			image: '../../assets/images/Electricity service.jpeg',
			rate: 4.5,
			price: 750,
		},
		{
			id: 2,
			Name: 'خدمة الماء',
			image: '../../assets/images/water.jpeg',
			rate: 4,
			price: 550,
		},
		{
			id: 3,
			Name: 'خدمة التنظيف',
			image: '../../assets/images/clean.jpeg',
			rate: 4.1,
			price: 650,
		},
		{
			id: 4,
			Name: 'خدمة التصليح',
			image: '../../assets/images/reapir.jpeg',
			rate: 4,
			price: 450,
		},
		{
			id: 5,
			Name: 'خدمة الالوان',
			image: '../../assets/images/color.jpeg',
			rate: 3.9,
			price: 250,
		},
		{
			id: 6,
			Name: 'خدمة  الاثاث',
			image: '../../assets/images/download.jpeg',
			rate: 3.6,
			price: 850,
		},
		{
			id: 7,
			Name: 'خدمة الالكترونيات',
			image: '../../assets/images/images (2).jpeg',
			rate: 4.8,
			price: 150,
		},
		{
			id: 8,
			Name: 'خدمة العمالة',
			image: '../../assets/images/lober.jpeg',
			rate: 3.7,
			price: 350,
		},
		{
			id: 9,
			Name: 'خدمة الدهانات',
			image: '../../assets/images/paints.jpeg',
			rate: 3.3,
			price: 350,
		},
	];
	select(id: any,ev :any) {
    if(ev.target.checked){

      this.SelectedCategory.push(id);
    }
    else{

      this.SelectedCategory.splice(this.SelectedCategory.indexOf(id), 1);
    } 

   console.log( this.SelectedCategory)
	}
  removeFilter(){
    this.SelectedCategory = [];
    this.Price=0
    this.SearchInput =""
    this.rates=0
  }
 
  click( event:any){
	if(event.target){

		console.log(event.target.value)
		
	}
  }
  filter(){
    console.log(this.SelectedCategory)
    console.log(this.Price)
    console.log(this.SearchInput)
   
  }
	show(): void {
		var GroupCard = document.getElementById('CardGroup');
		var Sitebar = document.getElementById('SiteBar');
		var x = document.getElementById('X');
		var contentcard = document.getElementsByName('contentcard');
		var elements = document.getElementsByName('elements');
		var filter = document.getElementById('filterIcon');
		Sitebar?.classList.remove('d-none');
		GroupCard?.classList.remove('col-md-12');
		GroupCard?.classList.add('col-md-8');
		contentcard?.forEach((i) => {
			i.classList.remove('col-md-4');
			i.classList.add('col-md-12');
			i.classList.replace('x', 'y');
		});
		elements?.forEach((i) => {
			i.classList.add('d-flex');
		});
		filter?.classList.add('d-none');
		x?.classList.remove('justify-content-between');
		x?.classList.add('justify-content-end');
	}
	close() {
		var GroupCard = document.getElementById('CardGroup');
		var Sitebar = document.getElementById('SiteBar');
		var contentcard = document.getElementsByName('contentcard');
		var elements = document.getElementsByName('elements');
		var filter = document.getElementById('filterIcon');
		var x = document.getElementById('X');
		Sitebar?.classList.add('d-none');
		GroupCard?.classList.remove('col-md-8');
		GroupCard?.classList.add('col-md-12');
		contentcard?.forEach((i) => {
			i.classList.add('col-md-4');
			i.classList.remove('col-md-12');
		});
		elements?.forEach((i) => {
			i.classList.remove('d-flex');
		});
		filter?.classList.remove('d-none');
		x?.classList.add('justify-content-between');
		x?.classList.remove('justify-content-end');
	}
}
