import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './Components/request-list/request-list.component';
import { EaringComponent } from './Components/earing/earing.component';
import { AddProduectsComponent } from './Components/add-produects/AddProduectsComponent';
import { RouterModule } from '@angular/router';
import { SendOffersComponent } from './Components/SendOffers/SendOffers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditComponent } from './Components/edit/edit.component'



@NgModule({
	declarations: [
		RequestListComponent,
		EaringComponent,
		AddProduectsComponent,
		ProductListComponent,
		SendOffersComponent,
		OrderDetailsComponent,
		RequestListComponent,
		OrderDetailsComponent,
  EditComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		NgxPaginationModule
	]
})
export class VendorModule 
{ 
	
}
