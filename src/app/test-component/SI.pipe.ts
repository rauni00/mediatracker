import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'CI',
})
export class SimpleIPipe implements PipeTransform {
  transform(Principle: number, Rate: number, Time: number) {
    return (Principle * Rate * Time) / 100;
  }
}
