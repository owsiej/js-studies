import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-first-task',
  standalone: true,
  imports: [FormsModule, FormComponent],
  templateUrl: './first-task.component.html',
  styleUrl: './first-task.component.scss',
})
export class FirstTaskComponent {
  public name = '';
  public familyName = '';

  public updateUserData(data: { name: string; familyName: string }) {
    this.name = data.name;
    this.familyName = data.familyName;
  }

  welcome() {
    alert('Welcome ' + this.name + ' ' + this.familyName);
  }

  public bye() {
    alert('Bye ' + this.name);
    this.name = '';
    this.familyName = '';
  }
}
