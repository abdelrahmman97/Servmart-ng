import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './Components/request-list/request-list.component';
import { EaringComponent } from './Components/earing/earing.component';
import { AddProduectsComponent } from './Components/add-produects/AddProduectsComponent';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { EditComponent } from './Components/edit/edit.component';

@NgModule( {
	declarations: [
		RequestListComponent,
		EaringComponent,
		AddProduectsComponent,
		ProductListComponent,
		OrderDetailsComponent,
		RequestListComponent,
		OrderDetailsComponent,
		EditComponent,
		OrderListComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		NgxPaginationModule,
	],
} )
export class VendorModule { }
