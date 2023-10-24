import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './Components/Rating/Rating.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountSettingsComponent } from '../modules/pages/AccountSettings/AccountSettings.component';
import { DatePipe } from '@angular/common';

@NgModule( {
	declarations: [
		RatingComponent,AccountSettingsComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		RatingComponent,

	],
	providers:[
		DatePipe
	]
} )
export class SharedModule { }
