import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../services/service.service';

@Component({
	selector: 'app-add-work-history',
	templateUrl: './add-work-history.component.html',
	styleUrls: ['./add-work-history.component.css']
})
export class AddWorkHistoryComponent {
	file: File;
	url: any;
	msg = "";

	workHistoryForm: FormGroup;
	values: any[] = [];

	constructor(private formBuilder: FormBuilder, private apiService: ServiceService) {

		this.workHistoryForm = this.formBuilder.group({
			jobTitle: ['', Validators.required],
			productCategory: ['', Validators.required],
			jobDescription: ['', Validators.required],
			file: [null, Validators.required]
		});
		this.apiService.getValues().subscribe(
			data => {
				this.values = data;
				console.log(this.values)
			},
			error => {
				console.error('Error fetching values:', error);
			}
		);
	}

	getFile(event: any) {
		this.file = event.target.files[0];
		console.log(this.file);
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
	}
	removeFile() {
		this.file = null
	}

}
