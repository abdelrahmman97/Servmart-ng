import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRequest } from 'src/app/core/models/IRequest';

@Component({
	selector: 'app-addRequest',
	templateUrl: './addRequest.component.html',
	styleUrls: ['./addRequest.component.css']
})
export class AddRequestComponent implements OnInit {


     IRequest!:IRequest;
	FromBuilder: any;



	constructor(private router: Router, private http: HttpClient, FromBuilder:FormBuilder) { }


	step: number = 1;

	AddRequestForm: FormGroup;
	uploadedImages: Array<string> = [];
	video: any;
	progress: number = 0;
	error = false;

	ngOnInit() {
		this.AddRequestForm = new FormGroup({
			images: new FormControl(''),
			video: new FormControl('')
		});
	 this.initForm();
	}
	initForm() {
		this.AddRequestForm = this.FromBuilder.group({
		
		  title: ['', Validators.required],
		  details: ['', Validators.required],
		  expectSalary: ['', Validators.required],
		  status: ['', Validators.required],
		  startDate: ['', Validators.required],
		  endDate: ['', Validators.required],
		  rateValue: ['', Validators.required],
		  rateMessage: ['']
		});
	  }
	  submitForm() {
		if (this.AddRequestForm.valid) {
		  // Perform the desired action with the form data
		  console.log(this.AddRequestForm.value);
		}
	  }




	onImagesChange(event: any) {
		this.error = false;
		const files = event.target.files;

		if (files.length > 5) {
			this.error = true
			return;
		}

		// Preview the uploaded images
		for (const file of files) {
			const reader = new FileReader();
			reader.onload = () => {
				this.uploadedImages.push(reader.result as string);
			};
			reader.readAsDataURL(file);
		}

	}

	onVideoChange(event: any) {
		const file = event.target.files[0];
	}

	removeImage(image) {
		const index = this.uploadedImages.indexOf(image);
		this.uploadedImages.splice(index, 1);
	}

}
