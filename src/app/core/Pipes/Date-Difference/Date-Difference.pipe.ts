import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
	name: 'DateDifference'
} )
export class DateDifferencePipe implements PipeTransform {

	transform( startDate: any, endDate?: any, args?: any ): any {
		const _startDate = new Date( startDate );
		const _endDate = new Date( endDate );
		let duration;

		if ( isNaN( _startDate.getTime() ) ) {
			duration = _endDate.getDate() - _startDate.getDate();
		} else if ( typeof startDate === 'number' ) {
			duration = startDate;
		}

		if ( typeof duration === 'number' ) {
			if ( duration === 1 ) {
				return `يوم`;
			} else if ( duration > 1 && duration <= 10 && duration !== 2 ) {
				return `${duration} أيام`;
			} else {
				return `${duration} يوم`;
			}
		} else {
			// Handle other cases if needed
			return 'Invalid duration';
		}
	}

}
