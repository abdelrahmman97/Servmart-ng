import { Component } from '@angular/core';
import { ILoginResualtModel } from '../../models/Auth/ILoginResualtModel';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';

@Component( {
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: [ './layout.component.css' ]
} )
export class LayoutComponent {
	user: ILoginResualtModel;
	constructor ( private auth: AuthService ) {
		this.user = auth.getUserValue();
	}

}
