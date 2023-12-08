import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Player } from '../player';
import { FormsModule } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-snake-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './snake-form.component.html',
  styleUrl: './snake-form.component.scss',
})
export class SnakeFormComponent {
  testPlayer: Player = {
    name: '',
    email: '',
    dateOfBirth: {
      year: 2023,
      month: 'January',
      day: 1,
    },
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.testPlayer);
  }
  generateDays(): Array<number> {
    let numberOfDays: number = 0;
    if (
      this.testPlayer.dateOfBirth.year == moment().year() &&
      this.testPlayer.dateOfBirth.month == moment().format('MMMM')
    ) {
      numberOfDays = +moment().format('D');
    } else {
      numberOfDays = moment(
        `${this.testPlayer.dateOfBirth.year}-${this.testPlayer.dateOfBirth.month}`,
        'YYYY-MMMM'
      ).daysInMonth();
    }

    return Array.from(
      {
        length: numberOfDays,
      },
      (val, idx) => idx + 1
    );
  }
  generateMonths(): Array<string> {
    moment.locale('en');
    if (this.testPlayer.dateOfBirth.year == moment().year()) {
      return moment
        .months()
        .slice(0, moment.months().indexOf(moment().format('MMMM')) + 1);
    }
    return moment.months();
  }
  generateYears(): Array<number> {
    const years = [];
    for (let i = moment().year(); i >= 1920; i--) {
      years.push(i);
    }
    return years;
  }
  resetDayNumber() {
    this.testPlayer.dateOfBirth.day = 1;
  }
}
