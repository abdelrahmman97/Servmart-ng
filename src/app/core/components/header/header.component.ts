import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';
import { ILoginResualtModel } from '../../models/Auth/ILoginResualtModel';

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
} )
export class HeaderComponent {

	user?: ILoginResualtModel | null = null;
	constructor( private auth: AuthService ) {
		this.auth.getUserAsObservable().subscribe( x => this.user = x );
	}

	isCustomer: boolean = this.auth.isCustomer();
	isVendor: boolean = this.auth.isVendor();
	isServiceProvider: boolean = this.auth.isServiceProvider();
	isAdmin: boolean = this.auth.isAdmin();

}
