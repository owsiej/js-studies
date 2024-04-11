import { Component, OnInit } from '@angular/core';
import { SnakeFormComponent } from '../snake-form/snake-form.component';
import { SnakeService } from '../snake.service';
import { Player } from '../player';
import { Router } from '@angular/router';
import { GameHighscoresComponent } from '../game-highscores/game-highscores.component';
import { HighscoresService } from '../highscores.service';
import { Score } from '../score';

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
    this._snakeService.currentPlayer.subscribe(
      (player: Player) => (this.testPlayer = player)
    );
    this._highscores
      .loadHighscores()
      .subscribe((data) => (this.globalHighscores = data));
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
