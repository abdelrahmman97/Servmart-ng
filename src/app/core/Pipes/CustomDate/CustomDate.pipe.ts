import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe( {
	name: 'CustomDate'
} )
export class CustomDatePipe implements PipeTransform {

	transform ( startDate: any, lang?: string ): any {

		if ( lang == '' || lang == null ) {
			moment.locale( 'ar' );
		}
		else {
			moment.locale( lang );
		}


		return moment().format( "Do MMMM YYYY" );;

	}

}
