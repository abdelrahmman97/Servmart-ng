import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-work-history',
  templateUrl: './add-work-history.component.html',
  styleUrls: ['./add-work-history.component.css']
})

export class AddWorkHistoryComponent {
  workHistoryForm: FormGroup;
	values: any[] = [];

  constructor(private formBuilder: FormBuilder,private apiService:ServiceService) { 

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
  removeFil(){
    if(this.workHistoryForm.valid){
      console.log(this.workHistoryForm.value)
    }
  }
 
  file:File;
  url:any;
  msg="";


    getFile(event:any){
      this.file = event.target.files[0];
      console.log(this.file);
      var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
      reader.onload = (_event) => {
        this.msg = "";
        this.url = reader.result; 
      }
    }
    removeFile(){
      this.file = null
    }

    uploadFile() {
      if (!this.file) {
        console.error('No file selected.');
        return;
      }
      if(!this.workHistoryForm.valid){
        this.workHistoryForm.markAllAsTouched
      }
      if(this.workHistoryForm.valid){
        console.log(this.workHistoryForm.value)
      
      const formData = new FormData();
      formData.append('Title', this.workHistoryForm.get('jobTitle').value);
      formData.append('Discription', this.workHistoryForm.get('jobDescription').value);
      formData.append('Rate', '0');
      formData.append('ExpectedSalary','0');
      formData.append('file', this.file);
      formData.append('CategoryID', this.workHistoryForm.get('productCategory').value);

      formData.append('ProviderID', '');
      
  
      this.apiService.uploadFormData(formData).subscribe(
        response => {
          console.log('File uploaded successfully', response);
        },
        error => {
          console.error('Error uploading file', error);
        }
      );
    }}
}
