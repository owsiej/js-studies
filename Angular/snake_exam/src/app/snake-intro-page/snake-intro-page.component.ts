import { Component, OnInit } from '@angular/core';
import { SnakeFormComponent } from '../snake-form/snake-form.component';
import { SnakeService } from '../snake.service';
import { Player } from '../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snake-intro-page',
  standalone: true,
  imports: [SnakeFormComponent],
  templateUrl: './snake-intro-page.component.html',
  styleUrl: './snake-intro-page.component.scss',
})
export class SnakeIntroPageComponent implements OnInit {
  constructor(private _snakeService: SnakeService, private _router: Router) {}
  testPlayer!: Player;

  ngOnInit(): void {
    this._snakeService.currentPlayer.subscribe(
      (player) => (this.testPlayer = player)
    );
  }

  onSubmitAction() {
    this._snakeService.updateCurrentPlayer(this.testPlayer);
    this._snakeService.changeSubmit(true);
    this._router.navigate(['/game-page']);
  }
}
