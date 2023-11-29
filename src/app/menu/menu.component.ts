import { Component, Input } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private basketService: BasketService) {
      
  }

  get total() {
    return this.basketService.items.length;
  }

    

}
