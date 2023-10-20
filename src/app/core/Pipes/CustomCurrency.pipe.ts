import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
	name: 'CustomCurrency'
} )
export class
	CustomCurrencyPipe implements PipeTransform {

	transform( value: number | string, lang: string, symbol: boolean ): any {
		switch ( lang ) {
			case 'ar':
				value = value as number;
				if ( symbol ) {
					return `E£${value.toFixed( 2 )}`
				}
				return `${value.toFixed( 2 )} جنيه`
				break;
			case 'en':
				value = value as number;
				if ( symbol ) {
					return `$${value.toFixed( 2 )}`
				}
				return `USD ${value.toFixed( 2 )}`
				break;
			default:
				break;
		}
		return value;
	}

}
