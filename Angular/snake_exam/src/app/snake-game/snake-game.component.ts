import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSnakeComponent, NgxSnakeModule } from 'ngx-snake';
import { SnakeService } from '../snake.service';
import { Player } from '../player';
import { interval, takeWhile } from 'rxjs';
import { SnakeEventsComponent } from '../snake-events/snake-events.component';
import { SnakeEvent } from '../snake-event';
import { GameAction } from '../game-action';
import { SnakeGameActionsComponent } from '../snake-game-actions/snake-game-actions.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snake-game',
  standalone: true,
  imports: [
    CommonModule,
    NgxSnakeModule,

    SnakeEventsComponent,
    SnakeGameActionsComponent,
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
  currentSubmitState!: boolean;
  private isTimerRunning: boolean = false;
  startTime: number = 0;
  timer: number = 0;
  isAlertVisible: boolean = false;

  constructor(private _snakeService: SnakeService, private _router: Router) {
    this._snakeService.currentSubmitState.subscribe((state: boolean) => {
      this.currentSubmitState = state;
    });

    if (this.currentSubmitState === false) {
      this._router.navigate(['/intro-page']);
    }
  }
  ngOnInit(): void {
    this._snakeService.currentPlayer.subscribe((player: Player) => {
      this.currentPlayer = player;
    });
  }

  renderFormPage() {
    this._snakeService.changeSubmit(false);
    this._snakeService.setPlayerDataOnDefault();
    this._router.navigate(['/intro-page']);
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
