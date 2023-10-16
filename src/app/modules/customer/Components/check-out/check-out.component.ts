import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {

  remove:string;
  vaildition:FormGroup=new FormGroup({
    'name':new FormControl(null,[Validators.required]),
    'textera':new FormControl(null,[Validators.required]),
    'city':new FormControl(null,[Validators.required]),
    'Select':new FormControl(null,[Validators.required]),
    'Phone':new FormControl(null,[Validators.required]),
    'Addrees':new FormControl(null,[Validators.required]),
    'cv':new FormControl(null,[Validators.required]),
    'exprt':new FormControl(null,[Validators.required]),
    'usercard':new FormControl(null,[Validators.required]),
    'namecard':new FormControl(null,[Validators.required])
    

  })
Arrayli:any[]=[{id:1,name:"Group1",salary:100},{id:2,name:"Group2",salary:200},{id:3,name:"Group3",salary:400 }]

show(){
  console.log(this.vaildition.value)
}
cansel(){
  console.log(this.vaildition=undefined)
  // console.log(this.vaildition.value)
}
}
