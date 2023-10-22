import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loadingspinner',
  templateUrl: './loadingspinner.component.html',
  styleUrls: ['./loadingspinner.component.css']
})
export class LoadingspinnerComponent implements OnInit {

	constructor(private spinner: NgxSpinnerService){

	}
	ngOnInit(): void {
		this.spinner.show();
		 	setTimeout(()=>{
				this.spinner.hide()
			},3000);

	}
}
