import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task3.component.html',
  styleUrl: './task3.component.scss',
})
export class Task3Component {
  public maxNumber: number = 7;
  public currentUser: string = '';
  public users: Array<string> = [];

  addUser() {
    this.users.push(this.currentUser);
    this.currentUser = '';
  }
  removeAllUsers() {
    this.users = [];
  }
  removeUser(index: number) {
    this.users.splice(index, 1);
  }
}
