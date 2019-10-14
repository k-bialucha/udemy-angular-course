import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'abbreviation',
})
export class AbbreviationPipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    const words = value.split(' ');

    const firstLetters = words.map(word => {
      const firstLetter = word.slice(0, 1);
      return firstLetter.toUpperCase();
    });

    return firstLetters.join('/');
  }
}
