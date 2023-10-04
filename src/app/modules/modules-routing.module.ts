import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from '../core/components/header/header.component';



const routes: Routes = [
	{
		path: 'profile',
		component: ProfileComponent
	},
	{
		path: 'header',
		component: HeaderComponent
	},
];

@NgModule( {
	imports: [RouterModule.forChild( routes )],
	exports: [RouterModule]
} )
export class ModulesRoutingModule { }
