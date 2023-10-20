import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { ProfileComponent } from './modules/pages/profile/profile.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AdeddComponent } from './modules/customer/Components/Adedd/Adedd.component';
import { ListComponent } from './modules/customer/Components/list/list.component';
import { SingelOrderComponent } from './modules/admin/Components/singel-order/singel-order.component';
import { OrderListComponent } from './modules/admin/Components/order-list/order-list.component';



const routes: Routes = [
	{ path: "", component: HomePageComponent },
	{ path: "index", component: HomePageComponent },
	{ path: "home", component: HomePageComponent },
	{ path: "Adedd", component: AdeddComponent },
	{ path: "list", component: ListComponent },
	{ path: "Singel-Order", component: SingelOrderComponent },
	{ path: "Order-List", component: OrderListComponent },




	

	



	// { path:"shop", component:ShopComponent},       
	// { path:"about", component:AboutComponent},

	{
		path: "",
		component: LayoutComponent,
		children: [
			{ path: "", loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule) },
			{ path: "admin", loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
		]
	},
	{
		path: "auth",
		loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
	},
	

	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
