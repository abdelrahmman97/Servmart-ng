import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OrderListComponent } from './Components/order-list/order-list.component';
// import { SingleOrderComponent } from './Components/single-order/single-order.component';
import { NgxChartComponent } from './Components/ngx-chart/ngx-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServiceListComponent } from './Components/service-list/service-list.component';
import { RequestComponent } from './Components/request/request.component';
import { ServproviderComponent } from './Components/servprovider/servprovider.component';
import { UserComponent } from './Components/user/user.component';
import { VendorComponent } from './Components/vendor/vendor.component';
import { SingleserviceComponent } from './Components/singleservice/singleservice.component';
import { SingleproductComponent } from './Components/singleproduct/singleproduct.component';
import { SinglerequestComponent } from './Components/singlerequest/singlerequest.component';



@NgModule({
	declarations: [
		AdminLayoutComponent,
		DashboardComponent,
		// SingleOrderComponent,
		NgxChartComponent,
		OrderListComponent,
		NgxChartComponent,
		ServiceListComponent,
		RequestComponent,
		ServproviderComponent,
		UserComponent,
		VendorComponent,
		SingleserviceComponent,
		SingleproductComponent,
		SinglerequestComponent
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
