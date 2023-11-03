import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddservicesComponent } from './Components/addservices/addservices.component';
import { AddserviceService } from '../vendor/services/addservices/addservice.service';
import { ServiceService } from './services/service.service';



@NgModule({
  declarations: [
    AddservicesComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  providers: [ServiceService],
})
export class ServicesProviderModule { }
