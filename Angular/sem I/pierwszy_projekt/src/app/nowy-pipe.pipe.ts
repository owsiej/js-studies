import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nowyPipe',
  standalone: true
})
export class NowyPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
