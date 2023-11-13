import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
	name: 'DateDifference'
} )
export class DateDifferencePipe implements PipeTransform {

	transform ( startDate: any, endDate: any, args?: any ): any {
		const _startDate = new Date( startDate );
		const _endDate = new Date( endDate );
		const duration = _endDate.getDate() - _startDate.getDate();

		if ( duration == 1 ) {
			return `يوم`;
		}
		else if ( 10 >= duration && duration > 1 && duration != 2 ) {
			return `${ duration } أيام`;
		}
		return `${ duration } يوم`;
	}

}
