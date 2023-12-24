import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerFormatter',
  standalone: true,
})
export class TimerFormatterPipe implements PipeTransform {
  transform(time: number): string {
    const milliseconds = time % 1000;
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor(time / 1000 / 60) % 60}`.slice(-2);
    const hours = `0${Math.floor(time / 1000 / 3600) % 24}`.slice(-2);
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }
}
