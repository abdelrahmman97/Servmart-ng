import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth/Auth.service';
import { RequestService } from '../../services/Request/Request.service';
import { ToastrService } from 'ngx-toastr';
import { IGovernorate } from 'src/app/core/models/Address/IGovernorate';
import { AddressService } from 'src/app/shared/services/Address/Address.service';
import { ICity } from 'src/app/core/models/Address/ICity';
import { RequestServiceCategoriesService } from 'src/app/shared/services/RequestAndServiceCategories/RequestServiceCategories.service';
import { IRequestServiceCategory } from 'src/app/core/models/RequestServiceCategory/IServiceCategory';

@Component( {
	selector: 'app-addRequest',
	templateUrl: './addRequest.component.html',
	styleUrls: ['./addRequest.component.css'],
} )
export class AddRequestComponent implements OnInit {

	constructor(
		private rsCategoryService: RequestServiceCategoriesService,
		private address: AddressService,
		private reqService: RequestService,
		private auth: AuthService,
		private toastr: ToastrService,
		private router: Router
	) { }

	step: number = 1;
	submited: boolean = false;

	CitiesList: ICity[] | null = null;
	GovernoratesList: IGovernorate[] | null = null;
	CategoriesList: IRequestServiceCategory[] | null = null;

	private _AddRequestForm: FormGroup;
	public get AddRequestForm(): FormGroup {
		return this._AddRequestForm;
	}
	public set AddRequestForm( value: FormGroup ) {
		this._AddRequestForm = value;
	}

	selectedImages: SelectedFile[] = [];
	imagesError = false;

	selectedVideo: File | null = null;
	selectedVideoUrl: string | null = null;
	videoSizeError = false;
	@ViewChild( 'videoInput', { static: false } ) videoInput: ElementRef;

	ngOnInit() {
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
			Video: new FormControl( '' ),
		} );

		this.address.getAllGovernorates().subscribe(
			next => {
				this.GovernoratesList = next as IGovernorate[];
				console.log( this.GovernoratesList );
			},
			error => {
				this.toastr.error( 'خطأ في عرض المحافظات' )
			}
		);

		this.rsCategoryService.getAllCategories().subscribe(
			next => {
				this.CategoriesList = next as IRequestServiceCategory[];
				console.log( this.CategoriesList );
			}
		);
	}

	getCities( event: any ) {
		this.CitiesList = this.GovernoratesList[event.target.value - 1].city;
	}

	onImagesSelected( event: any ) {

		const files = event.target.files;

		if ( files.length > 5 && this.selectedImages.length != 5 ) {
			this.imagesError = true
			event.target.value = null;
			return;
		}
		else {
			for ( const file of files ) {
				// if ( file.type.startsWith( 'image/' ) ) {
				const reader = new FileReader();
				reader.onload = ( e: any ) => {
					this.selectedImages.push( {
						file,
						url: e.target.result,
					} );
				};
				reader.readAsDataURL( file );
				// }
			}
			this.AddRequestForm.get( 'Images' )?.setValue( this.selectedImages );
		}

	}

	removeImage( index ) {
		this.selectedImages.splice( index, 1 );
		this.AddRequestForm.get( 'Images' )?.setValue( this.selectedImages );
	}

	onVideoSelected( event: any ) {
		const file = event.target.files[0];
		if ( file ) {
			if ( file.size <= 100 * 1024 * 1024 ) { // 100MB limit
				this.selectedVideo = file;
				this.selectedVideoUrl = URL.createObjectURL( file );
				this.videoSizeError = false;
			} else {
				this.videoSizeError = true;
			}
		}
	}

	removeVideo() {
		this.selectedVideo = null;
		this.selectedVideoUrl = null;
		this.videoSizeError = false;
		this.AddRequestForm.get( 'Video' )?.setValue( this.selectedVideo );
		if ( this.videoInput && this.videoInput.nativeElement ) {
			this.videoInput.nativeElement.value = null;
		}
	}

	submitForm() {
		this.submited = true;
		if ( this.AddRequestForm.valid ) {
			// Perform the desired action with the form data
			console.log( this.AddRequestForm.value );
			const formData: FormData = new FormData();

			if ( this.selectedImages ) {
				for ( let i = 0; i < this.selectedImages.length; i++ ) {
					formData.append( 'Images', this.selectedImages[i].file );
				}
			}

			if ( this.selectedVideo ) {
				formData.append( 'Video', this.selectedVideo );
			}

			formData.append( 'ClientId', null );
			formData.append( 'Title', this.AddRequestForm.get( 'Title' )?.value );
			formData.append( 'Category', this.AddRequestForm.get( 'Category' )?.value );
			formData.append( 'Details', this.AddRequestForm.get( 'Details' )?.value );
			formData.append( 'ExpectedSalary', this.AddRequestForm.get( 'ExpectedSalary' )?.value );
			formData.append( 'EndDate', this.AddRequestForm.get( 'EndDate' )?.value );
			formData.append( 'Address', this.AddRequestForm.get( 'Address' )?.value );
			formData.append( 'CityId', this.AddRequestForm.get( 'City' )?.value );
			formData.append( 'GovernorateId', this.AddRequestForm.get( 'Governorate' )?.value );

			for ( const pair of formData.entries() ) {
				console.log( `${pair[0]}: ${pair[1]}` );
			}

			console.log( this.AddRequestForm.value );

			this.toastr.info( "جاري إضافة الطلب" )

			this.reqService.create( formData ).subscribe(
				next => {
					console.log( next );
					this.toastr.success( "تم إضافة الطلب بنجاح" );
					this.router.navigate( ['/myRequests/'] );
				},
				error => {
					console.log( error );
					this.toastr.error( "حدث خطأ أثناء الاضافة\nالرجاء المحاولة مرة أخري" )
					this.submited = false;
				}
			);

		}
		else {
			this.toastr.error( "الرجاء اكمال البيانات" );
			this.submited = false;
		}
	}

}

interface SelectedFile {
	file: File;
	url: string;
}
