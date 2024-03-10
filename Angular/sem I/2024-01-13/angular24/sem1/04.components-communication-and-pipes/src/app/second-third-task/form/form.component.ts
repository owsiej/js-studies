import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../second-third-task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnChanges {
  public name = '';
  public selectedFramework = '';

  @Output() public newUser = new EventEmitter<Person>();
  @Output() public updatedUser = new EventEmitter<Person>();
  @Input() public editUser: Person | null = null;

  ngOnChanges(): void {
    this.name = this.editUser?.name ?? '';
    this.selectedFramework = this.editUser?.framework ?? '';
  }

  public onAddNewUser() {
    this.newUser.emit({
      name: this.name,
      framework: this.selectedFramework,
    });
    this.name = '';
    this.selectedFramework = '';
  }

  public onUpdateUser() {
    this.updatedUser.emit({
      name: this.name,
      framework: this.selectedFramework,
    });
    this.name = '';
    this.selectedFramework = '';
    this.editUser = null;
  }
}
