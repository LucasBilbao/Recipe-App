import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'noSwearing' })
export class SwearFilter implements PipeTransform {
  swearWords: string[] = [
    'poop',
    'crap',
    'fuck',
    'shit',
    'dick',
    'ass',
    'darn',
  ];

  transform(value: string = '', replacement: string = 'oops'): string {
    let result = value;

    for (const swear of this.swearWords) {
      result = result.replace(swear, replacement);
    }
    return result;
  }
}
