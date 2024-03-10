import { Component } from '@angular/core';
import { products } from '../products';
import { CommonModule } from '@angular/common';
import { ProductsAlertComponent } from '../products-alert/products-alert.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductsAlertComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert("The product has been shared!")
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale")
  }
}
