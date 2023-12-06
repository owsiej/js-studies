import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnakeFormComponent } from './snake-form/snake-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SnakeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'snake_exam';
}
