import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-addRequest',
	templateUrl: './addRequest.component.html',
	styleUrls: ['./addRequest.component.css']
})
export class AddRequestComponent implements OnInit {

	constructor(private router: Router, private http: HttpClient) { }


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
