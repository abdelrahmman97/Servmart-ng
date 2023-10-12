import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule }from '@swimlane/ngx-charts';  // added
import { NgxChartComponent } from './Components/ngx-chart/ngx-chart.component';

@NgModule({
  declarations: [
    NgxChartComponent,
  ],
  imports: [
    CommonModule,
    NgxChartsModule  // added
   
  ]
})
export class AdminModule { }
