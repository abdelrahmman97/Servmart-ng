import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';
import { PreferredThemeService } from 'src/app/shared/services/PreferredTheme.service';
import { ILoginResualtModel } from '../../models/Auth/ILoginResualtModel';

@Component({
	selector: 'app-user-dropdown',
	templateUrl: './user-dropdown.component.html',
	styleUrls: ['./user-dropdown.component.css']
})
export class UserDropdownComponent {

	user: ILoginResualtModel;

	selectedTheme: string = "";
	constructor(private auth: AuthService, private theme: PreferredThemeService) {
		this.selectedTheme = theme.getPreferredTheme();
		this.user = auth.getUserValue();
	}

	togglePreferredThemeMode(selectedTheme: string) {
		this.selectedTheme = selectedTheme;
		this.theme.setTheme(selectedTheme);
	}

	logOut() {
		this.auth.logOut();
	}
}
