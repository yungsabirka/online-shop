import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../../product";

@Pipe({
  name: 'filterTitle'
})
export class FilterTitlePipe implements PipeTransform {

  transform(products: Product[], filter: string): Product[] {
    return products
      .filter(product => product.title.toLowerCase()
        .includes(filter.toLowerCase()))
  }

}
