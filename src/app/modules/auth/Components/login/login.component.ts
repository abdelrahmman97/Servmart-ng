import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/Auth.service';

@Component( {
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
} )
export class LoginComponent {

	user: any;
	loginForm: FormGroup;

	constructor( private authService: AuthService ) { }

	ngOnInit(): void {
		this.loginForm = new FormGroup( {
			email: new FormControl(),
			password: new FormControl()
		} );
	}

	onSubmit() {
		this.user = {
			"email": this.loginForm.controls['email'].value,
			"password": this.loginForm.controls['password'].value,
		}
		console.log( "onSubmit: ", this.user );
		console.log( "onSubmit: ", this.loginForm.value );

		this.authService.login( this.user )
	}
}
