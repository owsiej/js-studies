import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './second-third-task/second-third-task.component';

@Pipe({
  name: 'filterByFramework',
  standalone: true,
})
export class FilterByFrameworkPipe implements PipeTransform {
  transform(people: Array<Person>, filterBy: string): Array<Person> {
    if (filterBy === 'all') {
      return people;
    }
    return people.filter((person) => person.framework === filterBy);
  }
}
