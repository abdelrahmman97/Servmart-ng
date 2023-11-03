import { Component, OnInit } from '@angular/core';

@Component( {
	selector: 'app-ngx-chart',
	templateUrl: './ngx-chart.component.html',
	styleUrls: ['./ngx-chart.component.css']
} )
export class NgxChartComponent {

	xAxisLabel = 'Country';
	yAxisLabel = 'Population';
	chartData = [
		{ name: 'USA', value: 1000000 },
		{ name: 'Canada', value: 500000 },
		{ name: 'UK', value: 620000 }
		// ... more data can be added as per your requirements
	];

}
