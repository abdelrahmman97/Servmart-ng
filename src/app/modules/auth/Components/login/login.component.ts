import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component( {
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
} )
export class LoginComponent {

	user: any;
	loginForm: FormGroup;

	constructor( private loginService: LoginService, private router: Router ) { }

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

		this.loginService.login( this.user ).subscribe(
			{
				next: data => {
					this.user = data[0];
					console.log( this.user );
					// localStorage.setItem( "token", JSON.stringify( this.user.token ) );
					this.loginService.setCookie( "SESSIONID", this.user.token, 365 );
					this.router.navigate( ['/profile'] );
				},
				error: error => {
					console.log( error );
				}
			}
		);
	}
}
