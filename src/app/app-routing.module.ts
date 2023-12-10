import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AdminLayoutComponent } from './modules/admin/Components/admin-layout/admin-layout.component';
import { userLogedInGuard } from './shared/guards/userLogedInGuard/user-loged-in.guard';
import { adminGuard } from './shared/guards/AdminGuard/admin.guard';


const routes: Routes = [
	{ path: "", component: HomePageComponent },
	{ path: "index", component: HomePageComponent },
	{ path: "home", component: HomePageComponent },

	// { path:"about", component:AboutComponent},

	{
		path: "",
		component: LayoutComponent,
		children: [
			{ path: "", loadChildren: () => import( './modules/modules.module' ).then( m => m.ModulesModule ) },
		]
	},
	{
		path: "auth",
		component: LayoutComponent,
		loadChildren: () => import( './modules/auth/auth.module' ).then( m => m.AuthModule )
	},
	{
		path: "admin",
		component: AdminLayoutComponent,
		loadChildren: () => import( './modules/admin/admin.module' ).then( m => m.AdminModule ),
		canActivate: [ userLogedInGuard, adminGuard ]
	},

	{ path: '**', component: NotFoundComponent }
];

@NgModule( {
	imports: [ RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ]
} )
export class AppRoutingModule { }
