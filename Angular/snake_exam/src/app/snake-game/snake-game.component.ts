import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSnakeComponent, NgxSnakeModule } from 'ngx-snake';
import { SnakeService } from '../snake.service';
import { Player } from '../player';
import { GameStatus } from '../game-status';
import { interval, takeWhile } from 'rxjs';
import { TimerFormatterPipe } from '../timer-formatter.pipe';

@Component({
  selector: 'app-snake-game',
  standalone: true,
  imports: [CommonModule, NgxSnakeModule, TimerFormatterPipe],
  templateUrl: './snake-game.component.html',
  styleUrl: './snake-game.component.scss',
})
export class SnakeGameComponent implements OnInit {
  @ViewChild(NgxSnakeComponent)
  private _snake!: NgxSnakeComponent;
  currentPlayer!: Player;
  pointsCounter: number = 0;
  gameStatusEvent: GameStatus = GameStatus.PENDING;

  private isTimerRunning: boolean = false;
  startTime: number = 0;
  timer: number = 0;

  constructor(private snakeService: SnakeService) {}
  ngOnInit(): void {
    this.snakeService.currentPlayer.subscribe((player) => {
      this.currentPlayer = player;
    });
  }

  renderFormPage() {
    this.snakeService.changeSubmit(false);
  }
  changeGameStatus(status: GameStatus) {
    this.gameStatusEvent = status;
  }
  onActionStartPressed() {
    this._snake.actionStart();
    this.changeGameStatus(GameStatus.PLAYING);
    this.startTimer();
  }
  onActionStopPressed() {
    this._snake.actionStop();
    this.changeGameStatus(GameStatus.PAUSED);
    this.stopTimer();
  }

  onActionStopResetPressed() {
    this._snake.actionReset();
    this.changeGameStatus(GameStatus.PENDING);
    this.resetTimer();
  }

  onDead() {
    this.changeGameStatus(GameStatus.PENDING);
    this.pointsCounter = 0;
    this.resetTimer();
  }
  onFoodEaten() {
    this.pointsCounter += 10;
  }

  startTimer() {
    this.isTimerRunning = true;
    this.startTime = Date.now() - this.timer;
    interval()
      .pipe(takeWhile(() => this.isTimerRunning))
      .subscribe(() => {
        if (this.isTimerRunning) {
          this.timer = Date.now() - this.startTime;
        }
        console.log('timer');
      });
  }

  stopTimer() {
    this.isTimerRunning = false;
  }

  resetTimer() {
    this.stopTimer();
    this.startTime = 0;
    this.timer = 0;
  }
}
