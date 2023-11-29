import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../product/product.types';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private readonly httpClient: HttpClient) { }

  private getProductsUrl = 'http://localhost:8080/api/products';

  private _products: Product[] = [];  

  // get products(): Product[] {
  //   return this._products;
  // }

  get hasProductsInStock(): boolean {
    return this._products.some(({ stock }) => stock > 0);
  }

  decreaseStock(productId: string): boolean {
    const impactedProduct = this._products.find(({id}) => id === productId);

    if(!impactedProduct || impactedProduct.stock === 0) {
      return false;
    } else {
      impactedProduct.stock--;
      return true;
    }
  }

  fetchProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.getProductsUrl);
  }

}
