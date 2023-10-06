import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './Components/Rating/Rating.component';
import { FormsModule } from '@angular/forms';

@NgModule( {
	declarations: [
		RatingComponent,
	],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [
		RatingComponent,
	]
} )
export class SharedModule { }
