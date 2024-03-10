import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroFormComponent } from './hero-form/hero-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeroFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-form';
}
