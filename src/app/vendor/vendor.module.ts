import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestDetailsComponent } from './Components/request-details/request-details.component';
import { RequestListComponent } from './Components/request-list/request-list.component';
import { VendorProfileComponent } from './Components/vendor-profile/vendor-profile.component';
import { EaringComponent } from './Components/earing/earing.component';
import { AddProduectsComponent } from './Components/add-produects/add-produects.component';



@NgModule({
  declarations: [
    RequestDetailsComponent,
    RequestListComponent,
    VendorProfileComponent,
    EaringComponent,
    AddProduectsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VendorModule { }
