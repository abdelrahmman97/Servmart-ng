import { Component } from '@angular/core';

@Component({
  selector: 'app-add-work-history',
  templateUrl: './add-work-history.component.html',
  styleUrls: ['./add-work-history.component.css']
})
export class AddWorkHistoryComponent {

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
}
