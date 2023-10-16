import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AcountService} from '../../../shared/services/acount-service/acount.service'
import { Observable, map } from 'rxjs'; 
import { IUser } from 'src/app/core/models/IUser';
import { DatePipe } from '@angular/common';
import { Role } from 'src/app/core/Enums/Role.enum';

@Component({
  selector: 'app-AccountSettings',
  templateUrl: './AccountSettings.component.html',
  styleUrls: ['./AccountSettings.component.css']
})
export class AccountSettingsComponent {
  accountForm: FormGroup;
  emailform :FormGroup;
  passform :FormGroup;

  nationalityOptions: string[] = ['مصر', 'السعودية', 'الكويت']; 
  workoption: string[]=['عام', 'بائع', 'مقدم خدمات','ادمن'];
  accountoption: string[]=['سباك', 'كهربائى', 'اخرى'];
  personalInfo: IUser;
  current :any;
  constructor(private fb: FormBuilder , private fe:FormBuilder, private f:FormBuilder, private b:FormBuilder,private datePipe: DatePipe, private AcountService:AcountService) {
  
    this.passform = this.b.group({
      current:[null,[Validators.required]],
      New: ['', [Validators.minLength(8), Validators.required,(control:any)=>{
        this.current=control.value
      }],
    ],
      confirm: [null, [Validators.required,(control:any)=>{
        console.log(this.current); // Check the entire form group

      
        if(this.current!==control.value){
          return {invid:true}
        }
        else {
          return null;
        }
      } ]],
    }, );
  
    this.accountForm = this.fb.group({
      photo: [null,
  [
   
    
  ]],
      FName: [null,[Validators.required, Validators.minLength(3),
    (control :any)=>{
      const namepattern=/^[a-zA-Z\u0600-\u06FF\s]+$/;
      const isValid=namepattern.test(control.value);
      if (control.value==''){
        return Validators.required;
      }else
      {
        return isValid ? null :{invalidname:true};
      }
    }]],
      LName: [null,[Validators.required, Validators.minLength(3),
        (control :any)=>{
          const namepattern=/^[a-zA-Z\u0600-\u06FF\s]+$/;
          const isValid=namepattern.test(control.value);
          if (control.value==''){
            return Validators.required;
          }else
          {
            return isValid ? null :{invalidname:true};
          }}
      ]],
     
   
    Username : [null,[Validators.required, Validators.minLength(3)]],
    PhoneNo: [null,[Validators.required,
        (control: any) => {
          const phoneNumberPattern = /^\d{11}$/; 
          const isValid = phoneNumberPattern.test(control.value);
        if (control.value==''){
          return Validators.required;
        }
        else {
        return isValid ? null : { invalidPhoneNumber: true };}
        }
    ]],
    SSN:[null,[Validators.required,
      (control :any)=>{
        const ssnpattern=/^\d{14}$/;
        const isValid=ssnpattern.test(control.value);
        if (control.value==''){
          return Validators.required;
        }else
        {
          return isValid ? null :{invalidsnn:true};
        }
      }
    ]],
    RoleID: [null],
    work: [null],
      Birthday: [null,[Validators.required,
        (control: any) => {
          const selectedDate = new Date(control.value);
          const currentDate = new Date();
          console.log(selectedDate)

          if (selectedDate > currentDate) {
            return { futureDate: true };

          }else if (control.value=='') {
            return Validators.required;}

          {
      
          return null;
        };
    }]],

      Address: [null,[Validators.required]],
      Gender: [null]
    });
    this.emailform=this.f.group({
      email: [null ,[Validators.required,
        (control: any) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailPattern.test(control.value);
        if (control.value==''){
          return Validators.required;
        }
        else {
        return isValid ? null : { invalidEmail: true };}
        }
    ]],
    })
  }
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  showPassword3: boolean = false;

  showPassword11(): void {
    this.showPassword1 = !this.showPassword1;
}
showPassword22(): void {
  this.showPassword2 = !this.showPassword2;
}
showPassword33(): void {
  this.showPassword3 = !this.showPassword3;
}

     emaiil :any;
     password:any;
  
    
    ngOnInit() {
      this.AcountService.getData().subscribe(data => {
        this.personalInfo = data;
        this.emaiil=this.personalInfo.Email
        this.password=this.personalInfo.PasswordHash
        // Set the initial values of the form controls
        this.accountForm.patchValue({
          work: this.personalInfo.work,
          RoleID:this.getStatusString( this.personalInfo.RoleID),
          FName:this.personalInfo.FName,
          photo:this.personalInfo.ProfilePic,
          LName:this.personalInfo.LName,
          Username:this.personalInfo.Username,
          SSN:this.personalInfo.SSN,
          Address:this.personalInfo.Address,
          Birthday:this.datePipe.transform(this.personalInfo.Birthday, 'yyyy-MM-dd'),
          PhoneNo:this.personalInfo.PhoneNo,
          Gender:this.personalInfo.Gender
        });
      });}
   
      getStatusString(statusCode: number): string {
        switch (statusCode) {
          case Role.Customer:
            return 'عام';
          case Role.Vendor:
            return 'بائع';
          case Role.ServiceProvider:
            return 'مقدم خدمات';
            case Role.Admin:
            return 'ادمن';
          default:
            return 'Unknown';
        }
      }
  selectFile(): void {
    const inputElement: HTMLInputElement = document.getElementById('photoInput') as HTMLInputElement;
    inputElement.click(); // Trigger click event on the hidden file input element
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.accountForm.get('photo').setValue(e.target.result); // Set the base64 string in the form field
      };
      reader.readAsDataURL(file);
    }
  }
  showsSuccessMessage = false;
  showeErrorMessage = false;
  saveAccount() {
    if (this.accountForm.valid) {
      const formData = this.accountForm.value;
      // Send formData to API endpoint for processing
      this.showsSuccessMessage = true;
      this.showeErrorMessage = false;
      console.log(formData);
    } else {
      this.showsSuccessMessage = false;
      this.showeErrorMessage = true;
      // Handle form validation errors
    }
  }
  showSuccessMessage = false;
  showErrorMessage = false;
  updateemail() {
    if (this.emailform.valid) {
      const formData = this.emailform.value;
      this.showSuccessMessage = true;
      this.showErrorMessage = false;
            console.log(formData);
    } else {
      this.showSuccessMessage = false;
      this.showErrorMessage = true;    }
  }
  showpSuccessMessage = false;
  showpErrorMessage = false;
  updatepass() {
    if (this.passform.valid) {
      const formData = this.passform.value;
      this.showpSuccessMessage = true;
      this.showpErrorMessage = false;
            console.log(formData);
    } else {
      console.log('error');
      this.showpSuccessMessage = false;
      this.showpErrorMessage = true;
         }
  }
}
