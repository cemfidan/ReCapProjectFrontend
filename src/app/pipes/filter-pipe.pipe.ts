import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/entity/car';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Car[], filterTextCarName: string): Car[] {
    filterTextCarName = filterTextCarName
      ? filterTextCarName.toLocaleLowerCase()
      : '';
    return filterTextCarName
      ? value.filter(
          (c: Car) => c.carName.toLocaleLowerCase().indexOf(filterTextCarName) !== -1
        )
      : value;
  }
}
