import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { userLogedInGuard } from 'src/app/shared/guards/userLogedInGuard/user-loged-in.guard';
import { HomePageComponent } from '../pages/home-page/home-page.component';

const routes: Routes = [

	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },

];

@NgModule( {
	imports: [ RouterModule.forChild( routes ) ],
	exports: [ RouterModule ]
} )
export class AuthRoutingModule { }
