import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestDetailsComponent } from './Components/request-details/request-details.component';
import { RequestListComponent } from './Components/request-list/request-list.component';
import { EaringComponent } from './Components/earing/earing.component';
import { AddProduectsComponent } from './Components/add-produects/add-produects.component';
import { RouterModule } from '@angular/router';
import { SendOffersComponent } from './Components/SendOffers/SendOffers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddWorkHistoryComponent } from '../services-provider/Components/add-work-history/add-work-history.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
	declarations: [
		RequestDetailsComponent,
		RequestListComponent,
		EaringComponent,
		AddProduectsComponent,
		SendOffersComponent,
  		AddWorkHistoryComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule
	]
})
export class VendorModule { }
