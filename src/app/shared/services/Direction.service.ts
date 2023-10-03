import { Injectable } from '@angular/core';
import { Direction } from '../Enums/direction.enum';

@Injectable( {
	providedIn: 'root'
} )
export class DirectionService {

	private dir: Direction = Direction.rtl;

	public getDire() {
		return this.dir;
	}

	public setDir( direction: Direction ) {
		this.dir = direction;
	}
}
