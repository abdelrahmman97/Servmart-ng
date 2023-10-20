import { Component } from '@angular/core';
import{Validators,FormGroup,FormControl} from "@angular/forms"

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
form:FormGroup=new FormGroup({
  'textArea':new FormControl(null,[Validators.required,Validators.maxLength(10)])
})

submit(){

 alert("fhnbhfbf")
}
}
