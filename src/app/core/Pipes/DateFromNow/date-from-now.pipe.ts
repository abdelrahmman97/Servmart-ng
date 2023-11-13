import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe( {
	name: 'DateFromNow'
} )
export class DateFromNowPipe implements PipeTransform {

	transform ( startDate: any, lang?: string ): any {

		if ( lang == '' || lang == null ) {
			moment.locale( 'ar' );
		}
		else {
			moment.locale( lang );
		}


		return moment( moment( startDate ).format() ).fromNow();

	}

}
