import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './shared/Components/profile/profile.component';
import { NotFoundComponent } from './shared/Components/not-found/not-found.component';
import { LayoutComponent } from './shared/Components/layout/layout.component';

const routes: Routes = [
	{ path: "", component: HomePageComponent },
	{ path: "index", component: HomePageComponent },
	{ path: "home", component: HomePageComponent },
	{
		path: "u", component: LayoutComponent, children: [
			{ path: "", component: ProfileComponent },
			{ path: "profile", component: ProfileComponent },
		]
	},


	{ path: '**', component: NotFoundComponent }
];

@NgModule( {
	imports: [RouterModule.forRoot( routes )],
	exports: [RouterModule]
} )
export class AppRoutingModule { }
