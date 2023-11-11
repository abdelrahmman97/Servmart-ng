import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcountService } from '../../../shared/services/acount-service/acount.service'
import { Observable, map } from 'rxjs';
import { IUser } from 'src/app/core/models/User/IUser';
import { DatePipe } from '@angular/common';
import { Role } from 'src/app/core/Enums/Role.enum';
import { ToastrService } from 'ngx-toastr';
import { IUserInfo } from 'src/app/core/models/User/AcountSting/IUserInfo';
import { IEmailchang } from 'src/app/core/models/User/AcountSting/IUserChangEmail';
import { IUserRole } from 'src/app/core/models/User/AcountSting/IRoleUserChang';
import { Changpassword } from 'src/app/core/models/User/AcountSting/IUserPassword';
import { AuthService } from '../../auth/services/auth/Auth.service';
import { ILoginResualtModel } from 'src/app/core/models/Auth/ILoginResualtModel';
@Component( {
	selector: 'app-AccountSettings',
	templateUrl: './AccountSettings.component.html',
	styleUrls: [ './AccountSettings.component.css' ]
} )
export class AccountSettingsComponent {
	userInfoForm: FormGroup;
	emailform: FormGroup;
	passform: FormGroup;
	userInfo: IUserInfo;
	Roleinfo: IUserRole;
	workoption = [ "Vendor", "Customer", "ServiceProvider" ]
	personalInfo: IUser;
	ChangPassword: Changpassword;
	UserRole: IUserRole;
	ChageEmail: IEmailchang;
	userData = new FormData();
	MyRoles: string[] = [];
	EmailNew: string[] = [];
	current: any;
	roles: any;

	constructor ( private auth: AuthService, private toastr: ToastrService, private formBuilder: FormBuilder, private datePipe: DatePipe, private AcountService: AcountService ) {

		this.userInfoForm = this.formBuilder.group( {
			FName: [ '', [ Validators.required, Validators.minLength( 3 ),
			( control: any ) => {
				const namepattern = /^[a-zA-Z\u0600-\u06FF\s]+$/;
				const isValid = namepattern.test( control.value );
				if ( control.value == '' ) {
					return Validators.required;
				} else {
					return isValid ? null : { invalidname: true };
				}
			} ] ],
			LName: [ null, [ Validators.required, Validators.minLength( 3 ),
			( control: any ) => {
				const namepattern = /^[a-zA-Z\u0600-\u06FF\s]+$/;
				const isValid = namepattern.test( control.value );
				if ( control.value == '' ) {
					return Validators.required;
				} else {
					return isValid ? null : { invalidname: true };
				}
			} ] ],
			Username: [ null, [ Validators.required, Validators.minLength( 3 ) ] ],
			PhoneNo: [ null, [ Validators.required,
			( control: any ) => {
				const phoneNumberPattern = /^\d{11}$/;
				const isValid = phoneNumberPattern.test( control.value );
				if ( control.value == '' ) {
					return Validators.required;
				}
				else {
					return isValid ? null : { invalidPhoneNumber: true };
				}
			} ] ],
			SSN: [ null, [ Validators.required,
			( control: any ) => {
				const ssnpattern = /^\d{14}$/;
				const isValid = ssnpattern.test( control.value );
				if ( control.value == '' ) {
					return Validators.required;
				} else {
					return isValid ? null : { invalidsnn: true };
				}
			} ] ],
			DOB: [ null, [ Validators.required,
			( control: any ) => {
				const selectedDate = new Date( control.value );
				const currentDate = new Date();
				console.log( selectedDate )

				if ( selectedDate > currentDate ) {
					return { futureDate: true };

				} else if ( control.value == '' ) {
					return Validators.required;
				}

				{

					return null;
				};
			} ] ],
			Address: [ null, [ Validators.required ] ],
			Gender: [ null ],
			Email: auth.getUserValue().email,
			ProfilePic: [ '' ]
		} );

		this.emailform = this.formBuilder.group( {
			email: [ null, [ Validators.required,
			( control: any ) => {
				let emailPattern;
				emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
				const isValid = emailPattern.test( control.value );
				if ( control.value == '' ) {
					return Validators.required;
				}
				else {
					return isValid ? null : { invalidEmail: true };
				}
			}
			] ],
		} )

		this.passform = this.formBuilder.group( {
			current: [ null, [ Validators.required ] ],
			New: [ '', [ Validators.minLength( 8 ), Validators.required, ( control: any ) => {
				this.current = control.value
			} ],
			],
			confirm: [ null, [ Validators.required, ( control: any ) => {
				console.log( this.current ); // Check the entire form group


				if ( this.current !== control.value ) {
					return { invid: true }
				}
				else {
					return null;
				}
			} ] ],
		} );
	}
	onSubmitUserInfo () {
		for ( const key in this.userInfoForm.controls ) {
			this.userData.append( key, this.userInfoForm.controls[ key ].value )
		}
		console.log( this.userInfo )
		this.AcountService.UpdateUserInfo( this.userData ).subscribe(
			data => {
				this.auth.getUserSubject().next( data as ILoginResualtModel )
				console.log( "user updated successfully" );
			},
			error => {
				console.log( error );
			}
		);
	}

	onChangeEmail () {
		this.AcountService.UpdateEmail( this.EmailNew ).subscribe(
			( data: ILoginResualtModel ) => {
				this.auth.getUserSubject().next( data );
				console.log( 'Updated email' );
				console.log( data );
			},
			( err ) => {
				console.log( err );
			}
		);
	}
	onChangePassword () {
	}
	updateSettings () {


		this.showaSuccessMessage = true;
		this.showaErrorMessage = false;

		this.AcountService.UpdateROle( this.MyRoles ).subscribe(
			data => {
				this.auth.getUserSubject().next( data as ILoginResualtModel )
				console.log( 'role updated' )
			},
			err => {
				console.log( err )
			} )

	}
	SetRole ( event: any, role: string ) {
		if ( event.target.checked == true ) {
			this.MyRoles.push( role )
		} else {
			this.MyRoles = this.MyRoles.filter( i => i != role )
		}
		console.log( this.MyRoles );

	}
	// showSuccess() {
	// 	this.toastr.error('Hello world!', 'Toastr fun!');
	// 	this.toastr.info('Hello world!', 'Toastr fun!');
	// 	this.toastr.success('Hello world!', 'Toastr fun!');
	// 	this.toastr.warning('Hello world!', 'Toastr fun!');
	// }

	showPassword: boolean = false;

	emaiil: any;
	password: any;


	ngOnInit () {
		this.AcountService.getData().subscribe( data => {
			this.personalInfo = data as IUser;
			this.emaiil = this.personalInfo.Email
			// this.password = this.ChangPassword.Newpassword
			// Set the initial values of the form controls
			this.userInfoForm.patchValue( {
				// work: this.personalInfo.work,
				// RoleID: this.getStatusString(this.UserRole.Role),
				FName: this.personalInfo.FName,
				photo: this.personalInfo.ProfilePic,
				LName: this.personalInfo.LName,
				Username: this.personalInfo.Username,
				SSN: this.personalInfo.SSN,
				Address: this.personalInfo.Address,
				Birthday: this.datePipe.transform( this.personalInfo.Birthday, 'yyyy-MM-dd' ),
				PhoneNo: this.personalInfo.PhoneNo,
				Gender: this.personalInfo.Gender,
			} );
		} );

	}

	getStatusString ( Roles: string[] ): string[] {

		// switch (statusCode) {
		// 	case Role.Customer:
		// 		return 'عام';
		// 	case Role.Vendor:
		// 		return 'بائع';
		// 	case Role.ServiceProvider:
		// 		return 'مقدم خدمات';
		// 	case Role.Admin:
		// 		return 'ادمن';
		// 	default:
		// 		return 'Unknown';
		// }
		return [];
	}
	selectFile (): void {
		const inputElement: HTMLInputElement = document.getElementById( 'photoInput' ) as HTMLInputElement;
		inputElement.click(); // Trigger click event on the hidden file input element
	}
	onFileSelected ( event: any ): void {
		const file = event.target.files[ 0 ];
		if ( file ) {
			const reader = new FileReader();
			reader.onload = ( e: any ) => {
				this.userInfoForm.get( 'photo' ).setValue( e.target.result ); // Set the base64 string in the form field
			};
			reader.readAsDataURL( file );
		}
		this.userData.append( "ProfilePic", <File> file )
	}
	showsSuccessMessage = false;
	showeErrorMessage = false;
	saveAccount () {
		if ( this.userInfoForm.valid ) {
			const formData = this.userInfoForm.value;
			// Send formData to API endpoint for processing
			this.showsSuccessMessage = true;
			this.showeErrorMessage = false;
			console.log( formData );
		} else {
			this.showsSuccessMessage = false;
			this.showeErrorMessage = true;
			// Handle form validation errors
		}
	}
	showSuccessMessage = false;
	showErrorMessage = false;
	updateemail () {
		if ( this.emailform.valid ) {
			const formData = this.emailform.value;
			this.showSuccessMessage = true;
			this.showErrorMessage = false;
			console.log( formData );
		} else {
			this.showSuccessMessage = false;
			this.showErrorMessage = true;
		}
	}
	showpSuccessMessage = false;
	showpErrorMessage = false;
	updatepass () {
		if ( this.passform.valid ) {
			const formData = this.passform.value;
			this.showpSuccessMessage = true;
			this.showpErrorMessage = false;
			console.log( formData );
		} else {
			console.log( 'error' );
			this.showpSuccessMessage = false;
			this.showpErrorMessage = true;
		}
	}
	showaSuccessMessage = false;
	showaErrorMessage = false;

}
