import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../definitions';
import { categories } from '../data';
import { CommonModule } from '@angular/common';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, CategorySelectorComponent, ProductsListComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  constructor(private _router: Router, private ageService: UserInfoService) {
    if (this.ageService.getAgeVerification() === false) {
      this._router.navigate(['/age-verification']);
    }
  }

  public allCategories: Array<Category> = categories;
  public productsToDisplay: Array<Product> = [];
  public productsInCart: Array<Product> = [];

  public onCategorySelected(category: Category): void {
    this.productsToDisplay = category.products;
  }

  public addToCart(product: Product): void {
    console.log('Adding to cart: ' + product.name);
    this.productsInCart.push(product);
  }
}
