import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product.types';

@Pipe({
  name: 'sortProducts',
  pure: false
})
export class SortProductsPipe implements PipeTransform {
  transform(products: Product[], productKey?: keyof Product): Product[] {
    if(!productKey) {
      return products;
    }
    return [...(products ?? [])].sort((productA, productB) => {
      if (productA[productKey] > productB[productKey]) {
        return 1;
      }
      if (productA[productKey] < productB[productKey]) {
        return -1;
      }
      return 0;
    });


    // if(productKey && productKey) {
    //   return products.sort((a,b) => a[productKey].toLocaleCompare(b[productKey]));
    // }
    // return null;
  }

}
