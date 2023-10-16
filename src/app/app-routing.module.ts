import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ShopComponent } from './modules/pages/shop/shop.component';
import { DetailsComponent } from './modules/pages/details/details.component';

import { AdminLayoutComponent } from './modules/admin/Components/admin-layout/admin-layout.component';




const routes: Routes = [
	{ path: "", component: HomePageComponent },
	{ path: "index", component: HomePageComponent },
	{ path: "home", component: HomePageComponent },

	// { path:"about", component:AboutComponent},

	{
		path: "",
		component: LayoutComponent,
		children: [
			{ path: "", loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule) },
		]
	},
	{
		path: "auth",
		loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: "admin",
		component: AdminLayoutComponent,
		loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
	},

	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
