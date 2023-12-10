import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
 AdminService
@Component( {
	selector: 'app-ngx-chart',
	templateUrl: './ngx-chart.component.html',
	styleUrls: ['./ngx-chart.component.css']
} )
export class NgxChartComponent  {

	xAxisLabel = 'الخدمات ';
	yAxisLabel = 'عدد الخدمات ';
	chartData = [
		{ name: ' سباكة ', value: 30 },
		{ name: 'نجار', value: 20},
		{ name: 'خراط', value: 50 },
		{ name: 'ترزى', value: 15 },
		{ name: 'لحام حديد', value: 55 },
		{ name: 'نقاش', value: 50 },
		{ name: 'باقى الخدمات ', value: 50 },
		// ... more data can be added as per your requirements
	];
	constructor(private adminServices: AdminService ,	){

	}

}
