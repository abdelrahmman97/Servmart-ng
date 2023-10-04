import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './Components/Rating/Rating.component';

@NgModule({
	declarations: [
		RatingComponent
	],
	imports: [
		CommonModule,
	],
	exports: [
		RatingComponent
	]
})
export class SharedModule { }
