import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: Array<string | boolean | number>): string {
    const reversedValue: string = String(value).split('').reverse().join('');
    const shouldRepeat: number = Number(args[0]);
    let result: string = '';
    for (let i = 0; i < shouldRepeat; i++) {
      result += ` ${reversedValue}`;
    }
    return result;
  }

}
