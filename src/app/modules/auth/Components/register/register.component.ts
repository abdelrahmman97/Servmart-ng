import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  user: any;
  reactiveForm: FormGroup;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      ssn: new FormControl(null),
      phoneNo: new FormControl(null),
      address: new FormControl(null),



    })
  }

  step: number = 1;

  incresseStep() {
    this.step += 1
  }
  decresseStep() {
    this.step -= 1
  }


  createuser() {
    this.user = {
      "firstName": this.reactiveForm.controls['firstName'].value,
      "lastName": this.reactiveForm.controls['lastName'].value,
      "ssn": this.reactiveForm.controls['ssn'].value,
      "phoneNo": this.reactiveForm.controls['phoneNo'].value,
      "address": "Selwa Bahary"
    }
    console.log(this.user);
    this.http.post<any>("https://localhost:7169/api/User", this.user)
      .subscribe(res => {
        alert('SIGNIN SUCCESFUL');
      }, err => {
        alert("Something went wrong")
      })
  }

}
