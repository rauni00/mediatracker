import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'GrossSalary',
})
export class GrossSalary implements PipeTransform {
  transform(Salary: number, Ta: number, Da: number, Hra: number) {
    let ta = Salary / (Ta * 100);
    let da = Salary / (Da * 100);
    let hra = Salary / (Hra * 100);
    let GrossS = Salary + ta + da + hra;
    return GrossS;
  }
}
