import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-catalog-search',
  templateUrl: './catalog-search.component.html',
  styleUrls: ['./catalog-search.component.scss']
})
export class CatalogSearchComponent {
  visibleArray: boolean[] = [
    false,false,false
  ]
  rateArray: number[] = [1,2,3,4,5]

  _maxPrice: number = 1000

  _minPrice: number = 0

  @Input()
  set minPrice(price: number){
    if(price < 0)
      this._minPrice = 0
    else if(price > this.maxPrice)
      this._minPrice = this.maxPrice - 1
    else
      this._minPrice = price
  }
  get minPrice() {return this._minPrice}

  set maxPrice(price: number){
    if(price > 1000)
      this._maxPrice = 1000
    else if(price < this.minPrice)
      this._maxPrice = this.minPrice + 1
    else
      this._maxPrice = price
  }
  get maxPrice() {return this._maxPrice}

  tap(index: number){
    this.visibleArray[index] = !this.visibleArray[index]
  }
}
