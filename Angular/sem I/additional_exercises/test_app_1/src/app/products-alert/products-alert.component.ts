import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-alert.component.html',
  styleUrl: './products-alert.component.scss',
})
export class ProductsAlertComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
