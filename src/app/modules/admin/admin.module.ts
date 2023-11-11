import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SingleOrderComponent } from './Components/single-order/single-order.component';
import { NgxChartComponent } from './Components/ngx-chart/ngx-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
	declarations: [
		AdminLayoutComponent,
		DashboardComponent,
		SingleOrderComponent,
		NgxChartComponent,
  
	],
	imports: [
		CommonModule,
		RouterModule,
		AdminRoutingModule,
		NgxChartsModule,
		NgxPaginationModule
	]
})
export class AdminModule { }
