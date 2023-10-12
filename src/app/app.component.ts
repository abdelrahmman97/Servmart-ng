import { Component } from '@angular/core';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
} )
export class AppComponent {
	title = 'Servmart';
 xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  chartData = [
    { name: 'USA', value: 1000000 },
    { name: 'Canada', value: 500000 },
    { name: 'UK', value: 620000 }
    // ... more data can be added as per your requirements
  ];
	// TODO => create alert to notify the user when loose internt connection
	public onlineOffline: boolean = navigator.onLine;


}
