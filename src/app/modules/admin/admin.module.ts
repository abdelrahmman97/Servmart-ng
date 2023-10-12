import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule( {
	declarations: [
		AdminLayoutComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		AdminRoutingModule
	]
} )
export class AdminModule { }
