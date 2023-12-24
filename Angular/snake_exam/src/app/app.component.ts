import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnakeFormComponent } from './snake-form/snake-form.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { SnakeService } from './snake.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SnakeFormComponent, SnakeGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  currentSubmitState!: boolean;

  constructor(private snakeService: SnakeService) {}

  ngOnInit(): void {
    this.snakeService.currentSubmitState.subscribe(
      (state) => {
        this.currentSubmitState = state}
    );

  }
}

