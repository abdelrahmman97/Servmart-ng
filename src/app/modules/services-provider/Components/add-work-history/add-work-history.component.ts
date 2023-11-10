import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { RequestServiceCategoriesService } from 'src/app/shared/services/RequestAndServiceCategories/RequestServiceCategories.service';
import { IRequestServiceCategory } from 'src/app/core/models/RequestServiceCategory/IServiceCategory';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component( {
	selector: 'app-add-work-history',
	templateUrl: './add-work-history.component.html',
	styleUrls: ['./add-work-history.component.css']
} )
export class AddWorkHistoryComponent implements OnInit {

	constructor(
		private serviceService: ServiceService,
		private category: RequestServiceCategoriesService,
		private toastr: ToastrService,
		private router: Router
	) { }

	CategoriesList: IRequestServiceCategory[] | null = null;

	selectedImages: SelectedFile[] = [];
	serviceForm: FormGroup;
	imagesError: boolean = false;
	submit: boolean = false;

	// for text area character limit size
	maxCharacters = 500;
	currentCharacterCount = 0;

	ngOnInit(): void {

		this.category.getAllCategories().subscribe(
			next => {
				this.CategoriesList = next as IRequestServiceCategory[];
				console.log( this.CategoriesList );
			}
		);

		this.serviceForm = new FormGroup( {
			ServiceTitle: new FormControl( '', Validators.required ),
			CategoryID: new FormControl( '', Validators.required ),
			Description: new FormControl( '', Validators.required ),
			ServicePic: new FormControl( '', Validators.required )
		} );

	}

	onImagesSelected( event: any ) {

		const files = event.target.files;
		if ( files.length > 5 ) {
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
			this.serviceForm.get( 'ServicePic' )?.setValue( this.selectedImages );
		}

	}

	removeImage( index ) {
		this.selectedImages.splice( index, 1 );
		this.serviceForm.get( 'ServicePic' )?.setValue( this.selectedImages );
	}

	onTextareaChange( event: any ) {
		const inputText = event.target.value;
		this.currentCharacterCount = inputText.length;
		if ( this.currentCharacterCount > this.maxCharacters ) {
			event.target.value = inputText.substring( 0, this.maxCharacters );
			this.currentCharacterCount = this.maxCharacters;
		}
	}

	onSubmitForm() {
		if ( this.serviceForm.valid ) {

			const formData: FormData = new FormData();

			const imageFiles = this.serviceForm.get( 'ServicePic' )?.value;
			if ( imageFiles ) {
				for ( let i = 0; i < imageFiles.length; i++ ) {
					formData.append( 'ServicePic', imageFiles[i] );
				}
			}

			const videoFile = this.serviceForm.get( 'Video' )?.value;
			if ( videoFile ) {
				formData.append( 'Video', videoFile );
			}

			formData.append( 'ClientId', null );
			formData.append( 'Title', this.serviceForm.get( 'Title' )?.value );
			formData.append( 'Details', this.serviceForm.get( 'Details' )?.value );
			formData.append( 'ExpectedSalary', this.serviceForm.get( 'ExpectedSalary' )?.value );
			formData.append( 'EndDate', this.serviceForm.get( 'EndDate' )?.value );

			formData.append( 'Address', this.serviceForm.get( 'Address' )?.value );
			formData.append( 'Category', this.serviceForm.get( 'Category' )?.value );
			formData.append( 'CityId', this.serviceForm.get( 'City' )?.value );
			formData.append( 'GovernorateId', this.serviceForm.get( 'Governorate' )?.value );

			for ( const pair of formData.entries() ) {
				console.log( `${pair[0]}: ${pair[1]}` );
			}

			console.log( this.serviceForm.value );

			// TODO call api
			this.serviceService.createService( formData ).subscribe(
				next => {
					console.log( next );
					this.toastr.success( "تم إضافة الطلب بنجاح" );
					this.router.navigate( ['/myRequests/'] );
				},
				error => {
					console.log( error );
					this.toastr.error( "حدث خطأ أثناء الاضافة\nالرجاء المحاولة مرة أخري" )
				}
			);

		}
	}

}


interface SelectedFile {
	file: File;
	url: string;
}
