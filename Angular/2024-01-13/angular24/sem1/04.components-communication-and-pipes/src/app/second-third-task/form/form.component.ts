import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../second-third-task.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  public name = '';
  public selectedFramework = '';

  @Output() public newUser = new EventEmitter<Person>();

  public onAddNewUser() {
    this.newUser.emit({
      name: this.name,
      framework: this.selectedFramework,
    });
    this.name = '';
    this.selectedFramework = '';
  }
}
