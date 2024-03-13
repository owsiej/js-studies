import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  getProductsData() {
    const url = 'https://edu.chrum.it/data/products.json';
    return this._http.get(url);
  }
}
