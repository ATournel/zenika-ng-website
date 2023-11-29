import { Injectable } from '@angular/core';
import { BasketItem } from '../basket.types';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }

  private _items: BasketItem[] = [];

  get items(): BasketItem[] {
    return this._items;
  }

  get total(): number {
    // return this._items.reduce((total, item) => total + item.price, 0);

    let totalPrice = 0;
    
    this._items.forEach(item => {
      totalPrice += item.price;
    })

    return totalPrice;
  }

  addItem(item: BasketItem) {
    this._items.push(item);
  }

}
