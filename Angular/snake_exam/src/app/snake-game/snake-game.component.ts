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
  currentGameStatus: GameStatus = GameStatus.PENDING;
  allGameStatus = GameStatus;
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
    this.currentGameStatus = status;
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
    this.pointsCounter = 0;
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

// zrobic nowy komponent do zbierania eventów
// rodzaje eventow:
//  - start game
//  - pause game
//  - resume game
//  - reset game
//  - dead
//  - eat food

// kazdy event powinien zabierac rodzaj eventu, timestamp, current score
// mozna dodac opcje sprawdzenia ile dany zawodnik sprzedzil czasu w grze, jego wszystkie wyniki
