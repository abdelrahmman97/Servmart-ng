import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { ProfileComponent } from './modules/pages/profile/profile.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AccountSettingsComponent } from './modules/pages/AccountSettings/AccountSettings.component';


const routes: Routes = [
	{ path: "", component: HomePageComponent },
	{ path: "index", component: HomePageComponent },
	{ path: "home", component: HomePageComponent },
	// { path: "accountsetting", component: AccountSettingsComponent },

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


	// {
	// 	path: "profile", component: LayoutComponent, children: [
	// 		{ path: "", component: ProfileComponent },
	// 	]
	// },


	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
