import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/Auth.service';
import { IUserRegister } from 'src/app/core/models/User/IUserRegister';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component( {
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
} )
export class RegisterComponent implements OnInit {

	// TODO (Abdo tiba): Add gender to register

	registerForm!: FormGroup;
	user!: IUserRegister;
	showPassword: boolean = false;
	showConfirmPassword: boolean = false;
	submited: boolean = false;

	constructor( private authService: AuthService, private toastr: ToastrService, private fb: FormBuilder, private router: Router ) {
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
		this.registerForm = this.fb.group( {
			Email: ['', [Validators.required, ( control: any ) => {
				const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				const isValid = emailPattern.test( control.value );
				if ( control.value == '' ) {
					return Validators.required;
				}
				else {
					return isValid ? null : { invalidEmail: true };
				}
			}]],
			Username: ['', [Validators.required]],
			Password: ['', [Validators.required, Validators.minLength( 8 )]],
			ConfirmPassword: ['', [Validators.required]],
			FirstName: ['', [Validators.required]],
			LastName: ['', [Validators.required]],
			Phone: ['', [Validators.required, ( control: any ) => {
				const phoneNumberPattern = /^01[0-2,5]\d{1,8}$/;
				const isValid = phoneNumberPattern.test( control.value );
				if ( control.value == '' ) {
					return Validators.required;
				}
				else {
					return isValid ? null : { invalidPhoneNumber: true };
				}
			}]],
			SSN: ['', [Validators.required, ( control: any ) => {
				const ssnpattern = /^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/;
				const isValid = ssnpattern.test( control.value );
				if ( control.value == '' ) {
					return Validators.required;
				} else {
					return isValid ? null : { invalidsnn: true };
				}
			}]],
			AccountType: ['', [Validators.required]],
			Specialization: [''],
		},
			{
				validator: this.ConfirmedValidator( 'Password', 'ConfirmPassword' ),
			}
		);
	}

	ConfirmedValidator( controlName: string, matchingControlName: string ) {
		return ( formGroup: FormGroup ) => {
			const control = formGroup.controls[controlName];
			const matchingControl = formGroup.controls[matchingControlName];
			if (
				matchingControl.errors &&
				!matchingControl.errors['confirmedValidator']
			) {
				return;
			}
			if ( control.value !== matchingControl.value ) {
				matchingControl.setErrors( { confirmedValidator: true } );
			} else {
				matchingControl.setErrors( null );
			}
		};
	}

	onSubmit() {
		this.authService.setSubmitted( true );
		this.user = {
			"Email": this.registerForm.get( 'Email' )!.value,
			"Username": this.registerForm.get( 'Username' )!.value,
			"Password": this.registerForm.get( 'Password' )!.value,
			"FName": this.registerForm.get( 'FirstName' )!.value,
			"LName": this.registerForm.get( 'LastName' )!.value,
			"phoneNumber": this.registerForm.get( 'Phone' )!.value,
			"SSN": this.registerForm.get( 'SSN' )!.value,
			"Role": [this.registerForm.get( 'AccountType' )!.value],
		}

		console.log( this.user );
		console.log( this.registerForm.value );
		if ( this.registerForm.invalid ) {
			console.log( this.registerForm.invalid );
			this.toastr.error( "برجاء التأكد من صحة البيانات المدخلة", "خطأ" )
			return;
		}

		this.authService.register( this.user );
	}

	step: number = 1;
	incresseStep() { this.step += 1 }
	decresseStep() { this.step -= 1 }

}

