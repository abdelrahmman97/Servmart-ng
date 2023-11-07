import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';
import { RequestService } from '../../services/Request/Request.service';
import { ToastrService } from 'ngx-toastr';

@Component( {
	selector: 'app-addRequest',
	templateUrl: './addRequest.component.html',
	styleUrls: [ './addRequest.component.css' ],
} )
export class AddRequestComponent implements OnInit {


	constructor ( private reqService: RequestService, private auth: AuthService, private toastr: ToastrService, private http: HttpClient ) { }

	step: number = 1;

	AddRequestForm: FormGroup;
	selectedImages: File[] = [];
	selectedVideo: File | null = null;
	imagesURLS: string[];
	@ViewChild( "VideoInput" ) VideoInput: ElementRef;
	@ViewChild( 'imageInput', { static: true } ) imageInputRef: ElementRef;

	error = false;

	ngOnInit () {
		this.AddRequestForm = new FormGroup( {
			ClientId: new FormControl( this.auth.getUserValue().userID ),
			Title: new FormControl( '', Validators.required ),
			Category: new FormControl( '', Validators.required ),
			Details: new FormControl( '', Validators.required ),
			ExpectedSalary: new FormControl( '', Validators.required ),
			EndDate: new FormControl( '', Validators.required ),
			Governorate: new FormControl( '', Validators.required ),
			City: new FormControl( '', Validators.required ),
			Address: new FormControl( '', Validators.required ),
			Images: new FormControl( '', Validators.required ),
			Video: new FormControl( '', Validators.nullValidator ),
		} );
	}

	onImagesSelected ( event: any ) {
		this.error = false;
		const files = event.target.files;

		if ( files.length > 5 ) {
			this.error = true
			return;
		}

		// Preview the uploaded images
		this.selectedImages = Array.from( files );
		this.AddRequestForm.get( 'Images' )?.setValue( files );

		for ( const file of files ) {
			const reader = new FileReader();
			reader.onload = () => {
				this.imagesURLS.push( reader.result as string );
			};
			reader.readAsDataURL( file );
		}
	}

	getImageUrl ( image: File ) {
		return URL.createObjectURL( image );
	}

	removeImage ( image ) {

		// this.selectedImages.splice( index, 1 );
		const index = this.selectedImages.indexOf( image );
		this.selectedImages.splice( index, 1 );
		this.imagesURLS.splice( index, 1 );
		this.AddRequestForm.get( 'Images' )?.setValue( this.selectedImages );

		if ( this.imageInputRef && this.imageInputRef.nativeElement ) {
			const input = this.imageInputRef.nativeElement;
			input.value = ''; // Clear the input
			input.files = this.selectedImages; // Set the input value to the updated selectedImages
		}
	}

	onVideoSelected ( event: any ) {
		this.selectedVideo = event.target.files[ 0 ];
		this.AddRequestForm.get( 'Video' )?.setValue( this.selectedVideo );
	}

	getVideoUrl () {
		return this.selectedVideo ? URL.createObjectURL( this.selectedVideo ) : '';
	}

	clearVideo () {
		this.selectedVideo = null;
		this.AddRequestForm.get( 'video' )?.setValue( this.selectedVideo );
		if ( this.VideoInput && this.VideoInput.nativeElement ) {
			this.VideoInput.nativeElement.value = null;
		}
	}

	submitForm () {
		if ( this.AddRequestForm.valid ) {
			// Perform the desired action with the form data
			console.log( this.AddRequestForm.value );
			const formData: FormData = new FormData();

			const imageFiles = this.AddRequestForm.get( 'Images' )?.value;
			if ( imageFiles ) {
				for ( let i = 0; i < imageFiles.length; i++ ) {
					formData.append( 'Images', imageFiles[ i ] );
				}
			}

			const videoFile = this.AddRequestForm.get( 'Video' )?.value;
			if ( videoFile ) {
				formData.append( 'Video', videoFile );
			}

			formData.append( 'ClientId', null );
			formData.append( 'Title', this.AddRequestForm.get( 'Title' )?.value );
			formData.append( 'Details', this.AddRequestForm.get( 'Details' )?.value );
			formData.append( 'ExpectedSalary', this.AddRequestForm.get( 'ExpectedSalary' )?.value );
			formData.append( 'EndDate', this.AddRequestForm.get( 'EndDate' )?.value );

			formData.append( 'Address', this.AddRequestForm.get( 'Address' )?.value );
			formData.append( 'Category', this.AddRequestForm.get( 'Category' )?.value );
			formData.append( 'City', this.AddRequestForm.get( 'City' )?.value );
			formData.append( 'Governorate', this.AddRequestForm.get( 'Governorate' )?.value );

			for ( const pair of formData.entries() ) {
				console.log( `${ pair[ 0 ] }: ${ pair[ 1 ] }` );
			}

			console.log( this.AddRequestForm.value );

			// TODO call api
			this.reqService.create( formData ).subscribe(
				next => {
					console.log( next );
					this.toastr.success( "تم إضافة الطلب بنجاح" );
				},
				error => {
					console.log( error );
					this.toastr.error( "حدث خطأ أثناء الاضافة\nالرجاء المحاولة مرة أخري" )
				}
			);

		}
	}

}
