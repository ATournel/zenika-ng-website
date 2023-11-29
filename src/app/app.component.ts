import { Component, Inject, OnInit } from '@angular/core';
import { APP_TITLE } from './app.token';
import { Product } from './product/product.types';
import { SelectProductKey } from './select-product-key/select-product-key.types';
import { BasketService } from './services/basket.service';
import { CatalogService } from './services/catalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(APP_TITLE) private readonly appTitle: string,
    private readonly catalogService: CatalogService,
    private readonly basketService: BasketService) {
  }
  title = this.appTitle;
  products: Product[] = [];
  productKey: SelectProductKey = undefined;
  
  ngOnInit(): void {
    this.catalogService.fetchProducts().subscribe((response) => this.products = response);
  }

  get total() {
    return this.basketService.total;
  }

  onAddToBasket(product: Product) :void {
    this.basketService.addItem(product.id).subscribe();
  }

  get hasProductsInStock(): boolean {
    return this.catalogService.hasProductsInStock;
  }

}
