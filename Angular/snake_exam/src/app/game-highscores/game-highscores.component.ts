import { Component, Input } from '@angular/core';
import { Score } from '../score';
import { CommonModule } from '@angular/common';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-game-highscores',
  standalone: true,
  imports: [CommonModule, SortPipe],
  templateUrl: './game-highscores.component.html',
  styleUrl: './game-highscores.component.scss',
})
export class GameHighscoresComponent {
  @Input() public highscores: Array<Score> = [];
  public sortOrder: 'asc' | 'desc' = 'desc';
}
