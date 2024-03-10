import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NowyKomponentComponent} from './nowy-komponent/nowy-komponent.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NowyKomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pierwszy_projekt';
}
