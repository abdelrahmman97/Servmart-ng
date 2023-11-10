import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/Auth.service';
import { ToastrService } from 'ngx-toastr';

@Component( {
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
} )
export class LoginComponent {

	user: any;
	loginForm: FormGroup;
	submited: boolean = false;

	constructor( private authService: AuthService, private toastr: ToastrService, private router: Router ) {
		if ( this.authService.getUserValue() ) {
			this.router.navigate( ['/'] );
		}

		this.authService.data.subscribe(
			( data ) => {
				this.submited = data;
			}
		);
	}

	ngOnInit(): void {

		this.loginForm = new FormGroup( {
			email: new FormControl( null, [Validators.required] ),
			password: new FormControl( null, [Validators.required] ),
		} );
	}

	onSubmit() {
		this.authService.setSubmitted( true );

		this.user = {
			"Email": this.loginForm.controls['email'].value,
			"Password": this.loginForm.controls['password'].value,
		}

		if ( this.loginForm.invalid ) {
			this.toastr.error( "برجاء ادخال بريد الكتروني صالح وكملة مرور صحيحة", "خطأ" )
			return;
		}

		this.authService.login( this.user );
	}
}
