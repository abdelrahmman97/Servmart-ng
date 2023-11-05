import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/Auth.service';
import { ToastrService } from 'ngx-toastr';

@Component( {
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
} )
export class LoginComponent {

	user: any;
	loginForm: FormGroup;

	constructor ( private authService: AuthService, private toastr: ToastrService ) { }

	ngOnInit (): void {

		this.loginForm = new FormGroup( {
			email: new FormControl( null, [ Validators.required ] ),
			password: new FormControl( null, [ Validators.required ] ),
		} );
	}

	onSubmit () {
		this.user = {
			"Email": this.loginForm.controls[ 'email' ].value,
			"Password": this.loginForm.controls[ 'password' ].value,
		}

		if ( this.loginForm.invalid ) {
			this.toastr.error( "برجاء ادخال بريد الكتروني صالح وكملة مرور صحيحة", "خطأ" )
			return;
		}

		this.authService.login( this.user );
	}
}
