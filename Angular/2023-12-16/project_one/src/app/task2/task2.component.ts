import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.scss',
})
export class Task2Component {
  public maxNumber: number = 7;
  public currentNumber: number = 0;
  public color: string = '';
  increaseNumber() {
    this.currentNumber += 1;
    this.updateColor();
  }
  decreaseNumber() {
    this.currentNumber -= 1;
    this.updateColor();
  }

  private updateColor() {
    if (this.maxNumber === this.currentNumber) {
      this.color = 'red';
    } else if (this.maxNumber - this.currentNumber <= 3) {
      this.color = 'orange';
    } else {
      this.color = '';
    }
  }
}
