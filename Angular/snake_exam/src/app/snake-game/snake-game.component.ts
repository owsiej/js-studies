import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSnakeComponent, NgxSnakeModule } from 'ngx-snake';
import { SnakeService } from '../snake.service';
import { Player } from '../player';
import { interval, takeWhile } from 'rxjs';
import { TimerFormatterPipe } from '../timer-formatter.pipe';
import { SnakeEventsComponent } from '../snake-events/snake-events.component';
import { SnakeEvent } from '../snake-event';
import { GameAction } from '../game-action';

@Component({
  selector: 'app-snake-game',
  standalone: true,
  imports: [
    CommonModule,
    NgxSnakeModule,
    TimerFormatterPipe,
    SnakeEventsComponent,
  ],
  templateUrl: './snake-game.component.html',
  styleUrl: './snake-game.component.scss',
})
export class SnakeGameComponent implements OnInit {
  @ViewChild(NgxSnakeComponent)
  private _snake!: NgxSnakeComponent;
  @ViewChild(SnakeEventsComponent)
  private eventComponent!: SnakeEventsComponent;
  currentPlayer!: Player;
  pointsCounter: number = 0;
  currentGameStatus: GameAction = GameAction.PENDING;
  allGameAction = GameAction;
  private isTimerRunning: boolean = false;
  startTime: number = 0;
  timer: number = 0;
  isAlertVisible: boolean = false;

  constructor(private snakeService: SnakeService) {}
  ngOnInit(): void {
    this.snakeService.currentPlayer.subscribe((player) => {
      this.currentPlayer = player;
    });
  }

  renderFormPage() {
    this.snakeService.changeSubmit(false);
    this.snakeService.setPlayerDataOnDefault();
  }
  changeGameStatus(status: GameAction) {
    this.currentGameStatus = status;
  }
  onActionStartPressed() {
    this._snake.actionStart();
    this.currentGameStatus === GameAction.PENDING
      ? this.sendEvent(
          new SnakeEvent(GameAction.START, this.timer, this.pointsCounter)
        )
      : this.sendEvent(
          new SnakeEvent(GameAction.RESUME, this.timer, this.pointsCounter)
        );
    this.changeGameStatus(GameAction.PLAY);
    this.startTimer();
  }
  onActionStopPressed() {
    this._snake.actionStop();
    this.changeGameStatus(GameAction.PAUSE);
    this.stopTimer();
    this.sendEvent(
      new SnakeEvent(GameAction.PAUSE, this.timer, this.pointsCounter)
    );
  }

  onActionStopResetPressed() {
    this._snake.actionReset();
    this.changeGameStatus(GameAction.PENDING);
    this.resetTimer();
    this.eventComponent.clearEvents();
    this.pointsCounter = 0;
  }

  onActionLeftPressed() {
    this._snake.actionLeft();
    this.sendEvent(
      new SnakeEvent(GameAction.LEFT, this.timer, this.pointsCounter)
    );
  }
  onActionRightPressed() {
    this._snake.actionRight();
    this.sendEvent(
      new SnakeEvent(GameAction.RIGHT, this.timer, this.pointsCounter)
    );
  }
  onActionUpPressed() {
    this._snake.actionUp();
    this.sendEvent(
      new SnakeEvent(GameAction.UP, this.timer, this.pointsCounter)
    );
  }
  onActionDownPressed() {
    this._snake.actionDown();
    this.sendEvent(
      new SnakeEvent(GameAction.DOWN, this.timer, this.pointsCounter)
    );
  }

  onDead() {
    this.changeGameStatus(GameAction.DEAD);
    this.stopTimer();
    this.sendEvent(
      new SnakeEvent(GameAction.DEAD, this.timer, this.pointsCounter)
    );
    this.showAlert();
  }
  onFoodEaten() {
    this.pointsCounter += 10;
    this.sendEvent(
      new SnakeEvent(GameAction.EAT, this.timer, this.pointsCounter)
    );
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

  sendEvent(event: SnakeEvent) {
    this.eventComponent.handleEvent(event);
  }

  showAlert() {
    this.isAlertVisible = true;
  }

  hideAlert() {
    this.isAlertVisible = false;
  }
}
