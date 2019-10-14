import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterKey: string, propName: string) {
    if (value.length === 0 || !filterKey) return value;

    return value.filter(object => object[propName] === filterKey);
  }
}
