import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

export interface Person {
  name: string;
  framework: string;
}

@Component({
  selector: 'app-second-third-task',
  standalone: true,
  imports: [FormsModule, FormComponent, ListComponent],
  templateUrl: './second-third-task.component.html',
  styleUrls: ['./second-third-task.component.scss'],
})
export class SecondThirdTaskComponent {
  maxNumber = 5;
  public color = '';

  public peopleInTheRoom: Array<Person> = [];

  addPerson(user: Person) {
    if (this.maxNumber === this.peopleInTheRoom.length) {
      alert('The room is full!');
      return;
    }

    this.peopleInTheRoom.push({
      name: user.name,
      framework: user.framework,
    });

    this._updateColor();
  }

  public clear() {
    this.peopleInTheRoom = [];
    this._updateColor();
  }

  public removePerson(person: Person) {
    this.peopleInTheRoom = this.peopleInTheRoom.filter((item) => {
      return item !== person;
    });
  }

  private _updateColor() {
    if (this.maxNumber === this.peopleInTheRoom.length) {
      this.color = 'red';
    } else if (this.maxNumber - this.peopleInTheRoom.length <= 3) {
      this.color = 'orange';
    } else {
      this.color = '';
    }
  }
}
