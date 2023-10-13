import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestDetailsComponent } from './Components/request-details/request-details.component';
import { RequestListComponent } from './Components/request-list/request-list.component';
import { EaringComponent } from './Components/earing/earing.component';
import { AddProduectsComponent } from './Components/add-produects/add-produects.component';
import { RouterModule } from '@angular/router';
import { SendOffersComponent } from './Components/SendOffers/SendOffers.component';



@NgModule({
	declarations: [
		RequestDetailsComponent,
		RequestListComponent,
		EaringComponent, 
		AddProduectsComponent,
		SendOffersComponent
	],
	imports: [
		CommonModule,
		RouterModule
	]
})
export class VendorModule { }
