import { Component } from '@angular/core';
import{Validators,FormGroup,FormControl} from "@angular/forms"
import { ServicesService } from '../services.service';
import { IService } from 'src/app/core/models/IService';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
form:FormGroup=new FormGroup({
  'textArea':new FormControl(null,[Validators.required,Validators.maxLength(10)])
})
detilslist:IService []=[]
constructor(public serv:ServicesService){
serv.getServices().subscribe(e=>{
 
  this.detilslist = e.slice(0,3) as IService[]
 
 

})
}
}
