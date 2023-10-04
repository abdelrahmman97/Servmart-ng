import { Component } from '@angular/core';
import { DirectionService } from '../../services/Direction.service';
import { Direction } from '../../Enums/direction.enum';

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
} )
export class HeaderComponent {

	dir: Direction = Direction.rtl;
	constructor( private direction: DirectionService ) {
		this.dir = direction.getDire();
	}
}
