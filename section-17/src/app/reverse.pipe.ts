import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    const lettersArray = value.split('');
    const lettersArrayReverse = lettersArray.reduceRight(
      (currentString: string, nextLetter: string) => {
        return currentString.concat(nextLetter);
      },
      ''
    );

    return lettersArrayReverse;
  }
}
