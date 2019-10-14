import { Pipe, PipeTransform } from '@angular/core';

const createSorter = (propertyName: string) => (a: string, b: string) => {
  if (a[propertyName].toLowerCase() < b[propertyName].toLowerCase()) return -1;

  if (a[propertyName].toLowerCase() > b[propertyName].toLowerCase()) return 1;

  return 0;
};

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(array: [], propertyName: string): [] {
    const sorter = createSorter(propertyName);
    const arraySorted = array.sort(sorter);

    return arraySorted;
  }
}
