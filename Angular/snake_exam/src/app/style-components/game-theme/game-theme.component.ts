import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameThemes } from '../../models/game-themes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './game-theme.component.html',
  styleUrl: './game-theme.component.scss',
})
export class GameThemeComponent {
  public gameThemes: typeof GameThemes = GameThemes;
  @Input() public currentGameTheme!: GameThemes;
  @Output() public currentGameThemeChange = new EventEmitter<GameThemes>();

  public gameThemeOptions = Object.values(this.gameThemes).map((val) => {
    const obj = {
      title: val[0].toUpperCase() + val.slice(1).replaceAll('-', ' '),
      value: val,
    };
    return obj;
  });

  updateCurrentThemeChange() {
    this.currentGameThemeChange.emit(this.currentGameTheme);
  }
}
