import { Component, OnInit } from '@angular/core';
import { SnakeFormComponent } from '../snake-form/snake-form.component';
import { SnakeService } from '../snake.service';
import { Player } from '../player';
import { Router } from '@angular/router';
import { GameHighscoresComponent } from '../game-highscores/game-highscores.component';
import { HighscoresService } from '../highscores.service';
import { Score } from '../score';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-snake-intro-page',
  standalone: true,
  imports: [SnakeFormComponent, GameHighscoresComponent],
  templateUrl: './snake-intro-page.component.html',
  styleUrl: './snake-intro-page.component.scss',
})
export class SnakeIntroPageComponent implements OnInit {
  constructor(
    private _snakeService: SnakeService,
    private _router: Router,
    private _highscores: HighscoresService
  ) {}
  testPlayer!: Player;
  public globalHighscores: Array<Score> = [];

  ngOnInit(): void {
    combineLatest([
      this._snakeService.currentPlayer,
      this._highscores.loadHighscores(),
    ]).subscribe(([player, score]) => {
      this.testPlayer = player;
      this.globalHighscores = score;
    });
  }

  onSubmitAction() {
    this._highscores.checkToken(this.testPlayer.token).subscribe((res) => {
      if (res.success === true) {
        this._snakeService.updateCurrentPlayer(this.testPlayer);
        this._snakeService.changeSubmit(true);
        this._router.navigate(['/game-page']);
      } else {
        alert('Invalid token.');
        this._snakeService.setPlayerDataOnDefault();
      }
    });
  }
}
