import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NotFoundComponent } from 'src/app/core/components/not-found/not-found.component';
import { ServiceListComponent } from './Components/service-list/service-list.component';
import { UserComponent } from './Components/user/user.component';
import { RequestComponent } from './Components/request/request.component';
import { VendorComponent } from './Components/vendor/vendor.component';
import { ServproviderComponent } from './Components/servprovider/servprovider.component';
import { SingleproductComponent } from './Components/singleproduct/singleproduct.component';
import { SingleserviceComponent } from './Components/singleservice/singleservice.component';
import { SinglerequestComponent } from './Components/singlerequest/singlerequest.component';
import { OrderListComponent } from '../vendor/Components/order-list/order-list.component';

const routes: Routes = [
	// { path: '', component: DashboardComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'orderList', component: OrderListComponent },
	{ path: 'servicesList', component: ServiceListComponent },
	{ path: 'userlist', component: UserComponent },
	{ path: 'requestlist', component: RequestComponent },
	{ path: 'vendorlist', component: VendorComponent },
	{ path: 'serprovider', component: ServproviderComponent },
	{ path: "detail/:prodID", component: SingleproductComponent },
	{ path: "servic/:serID", component: SingleserviceComponent },
	{ path: "request/:serID", component: SinglerequestComponent },

];

@NgModule( {
	imports: [RouterModule.forChild( routes )],
	exports: [RouterModule]
} )
export class AdminRoutingModule { }
