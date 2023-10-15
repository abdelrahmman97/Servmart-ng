import { Component } from '@angular/core';
import { PreferredThemeService } from 'src/app/shared/services/PreferredTheme.service';

@Component( {
	selector: 'app-user-dropdown',
	templateUrl: './user-dropdown.component.html',
	styleUrls: ['./user-dropdown.component.css']
} )
export class UserDropdownComponent {

	selectedTheme: string = "";
	constructor( private theme: PreferredThemeService ) {
		this.selectedTheme = theme.getPreferredTheme();
	}

	togglePreferredThemeMode( selectedTheme: string ) {
		this.selectedTheme = selectedTheme;
		this.theme.setTheme( selectedTheme );
	}
}
