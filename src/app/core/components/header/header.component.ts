import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NGX_LOADING_BAR_IGNORED } from '@ngx-loading-bar/http-client';

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
} )
export class HeaderComponent {
	constructor( private auth: AuthService,
	

		) { }
	isUserLoggedIn() {
		return this.auth.isLoggedIn();
	}
}
