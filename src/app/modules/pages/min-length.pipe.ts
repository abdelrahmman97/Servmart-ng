import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minLength'
})
export class MinLengthPipe implements PipeTransform {

  transform(maxlenght:string,number:number): unknown {
    return maxlenght.substring(0,number).concat('....');;
  }

}
