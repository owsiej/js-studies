import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../second-third-task.component';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() public people: Array<Person> = [];
  @Output() public deletePerson = new EventEmitter<Person>();
  @Output() public deleteAll = new EventEmitter();

  onRemove(person: Person) {
    this.deletePerson.emit(person);
  }

  onDeleteAll() {
    this.deleteAll.emit();
  }
}
