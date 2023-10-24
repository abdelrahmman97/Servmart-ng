import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';
import { PreferredThemeService } from 'src/app/shared/services/PreferredTheme.service';

@Component( {
	selector: 'app-user-dropdown',
	templateUrl: './user-dropdown.component.html',
	styleUrls: ['./user-dropdown.component.css']
} )
export class UserDropdownComponent {

	selectedTheme: string = "";
	constructor( private auth: AuthService, private theme: PreferredThemeService ) {
		this.selectedTheme = theme.getPreferredTheme();
	}

	togglePreferredThemeMode( selectedTheme: string ) {
		this.selectedTheme = selectedTheme;
		this.theme.setTheme( selectedTheme );
	}

	logOut() {
		this.auth.logOut();
	}
}
