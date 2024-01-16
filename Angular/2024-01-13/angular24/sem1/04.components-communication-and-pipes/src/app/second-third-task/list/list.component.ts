import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../second-third-task.component';
import { FilterByFrameworkPipe } from '../../filter-by-framework.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FilterByFrameworkPipe, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() public people: Array<Person> = [];
  @Output() public deletePerson = new EventEmitter<Person>();
  @Output() public deleteAll = new EventEmitter();
  @Output() public indexPersonToEdit = new EventEmitter<number>();
  public filterBy: string = 'all';

  onRemove(person: Person) {
    this.deletePerson.emit(person);
  }

  onDeleteAll() {
    this.deleteAll.emit();
  }

  onEdit(index: number) {
    this.indexPersonToEdit.emit(index);
  }
}
