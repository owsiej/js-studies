import { Component } from '@angular/core';
import { Category, Product } from '../definitions';
import { CommonModule } from '@angular/common';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { Router } from '@angular/router';
import { UserInfoService } from '../user-info.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, CategorySelectorComponent, ProductsListComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  constructor(
    private _router: Router,
    private _ageService: UserInfoService,
    private _productService: ProductsService
  ) {
    if (this._ageService.getAgeVerification() === false) {
      this._router.navigate(['/age-verification']);
    }
    this._productService
      .getProductsData()
      .subscribe((response) => (this.allCategories = response));
  }

  public allCategories: any = [];
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
