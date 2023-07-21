import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../../product";

@Pipe({
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {

  transform(products: Product[], min: number, max: number): Product[] {
    return products.filter(product =>
      Number(product.price) <= max && Number(product.price) >= min)
  }

}
