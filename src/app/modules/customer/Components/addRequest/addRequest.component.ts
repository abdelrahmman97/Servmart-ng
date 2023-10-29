import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component( {
	selector: 'app-addRequest',
	templateUrl: './addRequest.component.html',
	styleUrls: ['./addRequest.component.css']
} )
export class AddRequestComponent implements OnInit {

	constructor( private router: Router, private http: HttpClient ) { }


	step: number = 1;

	AddRequestForm: FormGroup;
	uploadedImages: Array<string> = [];
	progress: number = 0;

	ngOnInit() {
		this.AddRequestForm = new FormGroup( {
			images: new FormControl( '' ),
			video: new FormControl( '' )
		} );
	}

	onFileChange( event: any ) {
		const files = event.target.files;

		// Preview the uploaded images
		for ( const file of files ) {
			const reader = new FileReader();
			reader.onload = () => {
				this.uploadedImages.push( reader.result as string );
			};
			reader.readAsDataURL( file );
		}

	}


}
