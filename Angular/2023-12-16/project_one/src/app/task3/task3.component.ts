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
  public currentNumber: number = 0;

  addUser() {
    this.users.push(this.currentUser);
  }
  removeAllUsers() {
    this.users = [];
  }
  removeUser(userToRemove: string) {
    this.users = this.users.filter((el) => el !== userToRemove);
  }
}
