import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from './person';
import { Frameworks } from './frameworks';

@Component({
  selector: 'app-task4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task4.component.html',
  styleUrl: './task4.component.scss',
})
export class Task4Component {
  public maxNumber: number = 7;
  public currentPerson: Person = {
    name: '',
    framework: Frameworks.ANGULAR,
  };
  public users: Array<Person> = [];
  public allFrameworks: Array<string> = Object.values(Frameworks);
  public currentEditUser: Person | null = null;

  addUser() {
    const newPerson: Person = {
      name: this.currentPerson.name,
      framework: this.currentPerson.framework,
    };
    this.users.push(newPerson);
    this.currentPerson.name = '';
    this.currentPerson.framework = Frameworks.ANGULAR;
  }
  removeAllUsers() {
    this.users = [];
  }
  removeUser(index: number) {
    this.users.splice(index, 1);
  }
  updateUserToEdit(user: Person) {
    this.currentEditUser = user;
  }
  resetUserToEdit() {
    this.currentEditUser = null;
  }
}
