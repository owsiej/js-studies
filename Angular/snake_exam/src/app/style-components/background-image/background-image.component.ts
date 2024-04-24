import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SnakeBackgroundImage } from '../../models/snake-background-image';

@Component({
  selector: 'app-background-image',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './background-image.component.html',
  styleUrl: './background-image.component.scss',
})
export class BackgroundImageComponent {
  public backgroundImages: typeof SnakeBackgroundImage = SnakeBackgroundImage;
  @Input() public currentBackgroundImage!: SnakeBackgroundImage;
  @Output() public currentBackgroundImageChange =
    new EventEmitter<SnakeBackgroundImage>();

  public backgroundImageOptions = Object.values(this.backgroundImages).map(
    (val) => {
      const obj = {
        title: val.split('_')[2],
        value: val,
      };
      return obj;
    }
  );

  updateCurrentThemeChange() {
    this.currentBackgroundImageChange.emit(this.currentBackgroundImage);
  }
}
