import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {

	username: string;
	profilePic: string;
	constructor(private auth: AuthService) {
		this.username = auth.getUsername();
		this.profilePic = auth.getProfilePic()
	}

	isUserLoggedIn() {
		return this.auth.isLoggedIn();
	}
}
