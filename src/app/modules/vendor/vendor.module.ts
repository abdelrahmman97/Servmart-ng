import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './Components/request-list/request-list.component';
import { EaringComponent } from './Components/earing/earing.component';
import { AddProduectsComponent } from './Components/add-produects/AddProduectsComponent';
import { RouterModule } from '@angular/router';
import { SendOffersComponent } from './Components/SendOffers/SendOffers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddWorkHistoryComponent } from '../services-provider/Components/add-work-history/add-work-history.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import {NgxPaginationModule} from 'ngx-pagination'



@NgModule({
	declarations: [
		RequestListComponent,
		EaringComponent,
		AddProduectsComponent,
		ProductListComponent,
		SendOffersComponent,
  		AddWorkHistoryComponent,
		OrderDetailsComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		NgxPaginationModule
	]
})
export class VendorModule { }
