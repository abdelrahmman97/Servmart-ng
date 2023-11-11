import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NotFoundComponent } from 'src/app/core/components/not-found/not-found.component';
import { OrderListComponent } from '../vendor/Components/order-list/order-list.component';
import { SingleOrderComponent } from './Components/single-order/single-order.component';

const routes: Routes = [

	{ path: '', component: NotFoundComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'orderList', component: OrderListComponent },
	{ path: 'singleOrder', component: SingleOrderComponent },



];

@NgModule( {
	imports: [RouterModule.forChild( routes )],
	exports: [RouterModule]
} )
export class AdminRoutingModule { }
