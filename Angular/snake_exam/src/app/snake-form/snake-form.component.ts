import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  // @Input() playerName: string | undefined;
  // @Input() playerEmail: string | undefined;
  testPlayer: Player = {
    name: 'PlayerName',
    email: 'example@e-mail',
    dayOfBirth: {
      year: 2023,
      month: 'January',
      day: 1,
    },
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  generateDays(): Array<number> {
    return Array.from(
      {
        length: moment(
          `${this.testPlayer.dayOfBirth.year}-${this.testPlayer.dayOfBirth.month}`,
          'YYYY-MMMM'
        ).daysInMonth(),
      },
      (val, idx) => idx + 1
    );
  }
  generateMonths(): Array<string> {
    moment.locale('en');
    return moment.months();
  }
  generateYears(): Array<number> {
    const years = [];
    for (let i = 1920; i <= moment().year(); i++) {
      years.push(i);
    }
    return years.sort((a, b) => b - a);
  }
  resetDayNumber() {
    this.testPlayer.dayOfBirth.day = 1;
  }
}
