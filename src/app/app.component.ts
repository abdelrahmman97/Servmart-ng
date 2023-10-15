import { Component } from '@angular/core';
import { PreferredThemeService } from './shared/services/PreferredTheme.service';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
} )
export class AppComponent {
	title = 'Servmart';

	// TODO => create alert to notify the user when loose internt connection
	public onlineOffline: boolean = navigator.onLine;

	constructor( private theme: PreferredThemeService ) {
		theme.load();
	}


}
