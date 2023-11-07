import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';

@Component( {
	selector: 'app-addRequest',
	templateUrl: './addRequest.component.html',
	styleUrls: ['./addRequest.component.css'],
} )
export class AddRequestComponent implements OnInit {


	constructor( private auth: AuthService, private router: Router, private http: HttpClient ) { }

	step: number = 1;

	AddRequestForm: FormGroup;
	selectedImages: File[] = [];
	selectedVideo: File | null = null;
	@ViewChild( "VideoInput" ) VideoInput: ElementRef;
	@ViewChild( 'imageInput', { static: true } ) imageInputRef: ElementRef;

	error = false;

	ngOnInit() {
		this.AddRequestForm = new FormGroup( {
			ClientId: new FormControl( this.auth.getUser().userID ),
			Title: new FormControl( '', Validators.required ),
			Category: new FormControl( '', Validators.required ),
			Details: new FormControl( '', Validators.required ),
			ExpectedSalary: new FormControl( '', Validators.required ),
			EndDate: new FormControl( '', Validators.required ),
			Governorate: new FormControl( '', Validators.required ),
			City: new FormControl( '', Validators.required ),
			Address: new FormControl( '', Validators.required ),
			Images: new FormControl( '', Validators.required ),
			Video: new FormControl( '' ),
		} );
	}

	onImagesSelected( event: any ) {
		this.error = false;
		const files = event.target.files;

		if ( files.length > 5 ) {
			this.error = true
			return;
		}

		// Preview the uploaded images
		this.selectedImages = Array.from( files );
		this.AddRequestForm.get( 'Images' )?.setValue( files );
	}

	getImageUrl( image: File ) {
		return URL.createObjectURL( image );
	}

	removeImage( image ) {
		// this.selectedImages.splice( index, 1 );
		const index = this.selectedImages.indexOf( image );
		this.selectedImages.splice( index, 1 );
		this.AddRequestForm.get( 'Images' )?.setValue( this.selectedImages );

		if ( this.imageInputRef && this.imageInputRef.nativeElement ) {
			const input = this.imageInputRef.nativeElement;
			input.value = ''; // Clear the input
			input.files = this.selectedImages; // Set the input value to the updated selectedImages
		}
	}

	onVideoSelected( event: any ) {
		this.selectedVideo = event.target.files[0];
		this.AddRequestForm.get( 'video' )?.setValue( this.selectedVideo );
	}

	getVideoUrl() {
		return this.selectedVideo ? URL.createObjectURL( this.selectedVideo ) : '';
	}

	clearVideo() {
		this.selectedVideo = null;
		this.AddRequestForm.get( 'video' )?.setValue( this.selectedVideo );
		if ( this.VideoInput && this.VideoInput.nativeElement ) {
			this.VideoInput.nativeElement.value = null;
		}
	}

	submitForm() {
		if ( this.AddRequestForm.valid ) {
			// Perform the desired action with the form data
			console.log( this.AddRequestForm.value );
			const formData: FormData = new FormData();

			const imageFiles = this.AddRequestForm.get( 'Images' )?.value;
			if ( imageFiles ) {
				for ( let i = 0; i < imageFiles.length; i++ ) {
					formData.append( 'Images', imageFiles[i] );
				}
			}

			const videoFile = this.AddRequestForm.get( 'Video' )?.value;
			if ( videoFile ) {
				formData.append( 'Video', videoFile );
			}

			formData.append( 'ClientId', this.AddRequestForm.get( 'ClientId' )?.value );
			formData.append( 'Title', this.AddRequestForm.get( 'Title' )?.value );
			formData.append( 'Details', this.AddRequestForm.get( 'Details' )?.value );
			formData.append( 'ExpectedSalary', this.AddRequestForm.get( 'ExpectedSalary' )?.value );
			formData.append( 'EndDate', this.AddRequestForm.get( 'EndDate' )?.value );

			for ( const pair of formData.entries() ) {
				console.log( `${pair[0]}: ${pair[1]}` );
			}

			// TODO call api
		}
	}

}
