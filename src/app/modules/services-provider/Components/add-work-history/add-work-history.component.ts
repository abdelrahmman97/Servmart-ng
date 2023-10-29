import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-add-work-history',
	templateUrl: './add-work-history.component.html',
	styleUrls: ['./add-work-history.component.css']
})
export class AddWorkHistoryComponent implements OnInit {


	AddServiceForm: FormGroup;
	formData = new FormData();

	service: any;
	uploadedImages: Array<string> = [];
	progress: number = 0;
	error = false;


	ngOnInit() {
		this.AddServiceForm = new FormGroup({
			name: new FormControl('', [Validators.required]),
			salary: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required]),
			images: new FormControl('', [Validators.required]),
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

	removeImage(image) {
		const index = this.uploadedImages.indexOf(image);
		this.uploadedImages.splice(index, 1);
	}

	onSubmit() {

		if (this.AddServiceForm.invalid) {
			console.log("error");
			return;
		}

		for (const file of this.uploadedImages) {
			this.formData.append('images', file);
		}

		this.formData.append('name', this.AddServiceForm.controls['name'].value);
		this.formData.append('salary', this.AddServiceForm.controls['salary'].value);
		this.formData.append('description', this.AddServiceForm.controls['description'].value);

		// for (const [key, value] of this.formData.entries()) {
		// 	console.log(`${key}: ${value}`);
		// }


	}
}
