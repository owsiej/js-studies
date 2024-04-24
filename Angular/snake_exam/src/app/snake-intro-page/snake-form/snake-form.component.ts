import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../../models/player';
import { FormsModule } from '@angular/forms';
import moment from 'moment';
import { GameThemes } from '../../models/game-themes';
import { GameThemeComponent } from '../../style-components/game-theme/game-theme.component';

@Component({
  selector: 'app-snake-form',
  standalone: true,
  imports: [CommonModule, FormsModule, GameThemeComponent],
  templateUrl: './snake-form.component.html',
  styleUrl: './snake-form.component.scss',
})
export class SnakeFormComponent {
  @Input() public testPlayer!: Player;

  @Output() public submitEvent = new EventEmitter();

  public currentGameTheme: GameThemes = GameThemes.STANDARD;

  onSubmit() {
    this.submitEvent.emit(this.currentGameTheme);
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
