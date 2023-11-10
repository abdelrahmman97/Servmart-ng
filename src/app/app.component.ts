import { Component } from '@angular/core';
import { PreferredThemeService } from './shared/services/PreferredTheme.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
} )
export class AppComponent {
	title = 'Servmart';

	// loading: boolean = true;

	// TODO(abdotiba): create alert to notify the user when loose internt connection

	public onlineOffline: boolean = navigator.onLine;

	constructor( private toastr: ToastrService, private theme: PreferredThemeService, private router: Router ) {
		// theme.load();
		// this.router.events.subscribe(
		// 	( e ) => {
		// 		let event = e as RouterEvent;
		// 		this.navigationInterceptor( event );
		// 	}
		// );
	}

	// navigationInterceptor( event: RouterEvent ): void {
	// 	if ( event instanceof NavigationStart ) {
	// 		this.loading = true;
	// 	}
	// 	if ( event instanceof NavigationEnd ) {
	// 		setTimeout( () => {
	// 			this.loading = false;
	// 		}, 1000 );
	// 	}
	// 	// Set loading state to false in both of the below events to hide the spinner in case a request fails
	// 	if ( event instanceof NavigationCancel ) {
	// 		setTimeout( () => {
	// 			this.loading = true;
	// 		}, 1000 );
	// 	}
	// 	if ( event instanceof NavigationError ) {
	// 		setTimeout( () => {
	// 			this.loading = true;
	// 		}, 1000 );
	// 	}
	// }

}
