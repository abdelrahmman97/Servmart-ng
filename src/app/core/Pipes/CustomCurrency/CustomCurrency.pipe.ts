import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
	name: 'CustomCurrency'
} )
export class
	CustomCurrencyPipe implements PipeTransform {

	transform( value: number | string, lang: string = "ar", symbol: boolean = false ): any {
		value = value as number;
		const formattedValue = value.toFixed( 2 );
		switch ( lang ) {
			case "ar":
				return symbol ? `E£ ${formattedValue}` : `${formattedValue} جنيه`;
			case 'en':
				return symbol ? `$ ${formattedValue}` : `USD ${formattedValue}`;
			default:
				return value;
		}
	}

}
