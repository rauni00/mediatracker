import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'PowerPipe',
})
export class CustomPowerPipe implements PipeTransform {
  transform(value: number, exponent: number = 1) {
    return Math.pow(value, exponent);
  }
}
