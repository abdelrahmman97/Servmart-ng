import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/Auth.service';
import { IUserRegister } from 'src/app/core/models/User/IUserRegister';

@Component( {
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
} )
export class RegisterComponent implements OnInit {

	registerForm!: FormGroup;
	user!: IUserRegister;

	constructor( private authService: AuthService ) { }

	ngOnInit(): void {
		this.registerForm = new FormGroup( {
			Email: new FormControl( '', Validators.required ),
			Username: new FormControl( '', Validators.required ),
			Password: new FormControl( '', Validators.required ),
			ConfirmPassword: new FormControl( '', Validators.required ),
			FirstName: new FormControl( '', Validators.required ),
			LastName: new FormControl( '', Validators.required ),
			Phone: new FormControl( '', Validators.required ),
			SSN: new FormControl( '', Validators.required ),
			AccountType: new FormControl( '', Validators.required ),
			Specialization: new FormControl( '', Validators.required ),
		} );
	}

	onSubmit() {
		this.user = {
			"Email": this.registerForm.get( 'Email' )!.value,
			"Username": this.registerForm.get( 'Username' )!.value,
			"Password": this.registerForm.get( 'Password' )!.value,
			"FName": this.registerForm.get( 'FirstName' )!.value,
			"LName": this.registerForm.get( 'LastName' )!.value,
			"phoneNumber": this.registerForm.get( 'Phone' )!.value,
			"SSN": this.registerForm.get( 'SSN' )!.value,
			"Role": this.registerForm.get( 'AccountType' )!.value,
		}
		console.log( this.user );
		this.authService.register( this.user );
	}


	step: number = 1;

	incresseStep() {
		this.step += 1
	}
	decresseStep() {
		this.step -= 1
	}



}
