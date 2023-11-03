import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { SingleOrderComponent } from './Components/single-order/single-order.component';
import { NgxChartComponent } from './Components/ngx-chart/ngx-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
	declarations: [
		AdminLayoutComponent,
		DashboardComponent,
		OrderListComponent,
		SingleOrderComponent,
		NgxChartComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		AdminRoutingModule,
		NgxChartsModule
	]
})
export class AdminModule { }
