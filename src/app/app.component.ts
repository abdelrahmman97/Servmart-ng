import { Component } from '@angular/core';
import { Direction } from './shared/Enums/direction.enum';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
} )
export class AppComponent {
	title = 'Servmart-ng';

	pageDir = Direction.rtl;
}
