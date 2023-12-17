import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.scss',
})
export class Task1Component {
  public firstName: string = '';
  public familyName: string = '';

  welcome() {
    alert(`Hello ${this.firstName} ${this.familyName}`);
  }
  bye() {
    alert(`Bye, bye ${this.firstName} ${this.familyName}`);
    this.firstName = '';
    this.familyName = '';
  }
}
