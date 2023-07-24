import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-catalog-search',
  templateUrl: './catalog-search.component.html',
  styleUrls: ['./catalog-search.component.scss']
})
export class CatalogSearchComponent {
  visibleArray: boolean[] = [false,false]

  _maxPrice: number = 1000
  _minPrice: number = 0

  maxInputValue: number = 1000
  minInputValue: number = 0
  @Input() filterTitle: string = ''
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

  @Input()
  set maxPrice(price: number){
    if(price > 1000)
      this._maxPrice = 1000
    else if(price < this.minPrice)
      this._maxPrice = this.minPrice + 1
    else
      this._maxPrice = price
  }
  get maxPrice() {return this._maxPrice}

  @Output() filterTitleChange = new EventEmitter<string>()
  onFilterTitleChange(model: string){
    this.filterTitleChange.emit(model)
  }

  @Output() maxPriceChange = new EventEmitter<number>()
  onMaxPriceChange(model: number){
    this.maxPriceChange.emit(model)
  }
  @Output() minPriceChange = new EventEmitter<number>()
  onMinPriceChange(model: number){
    this.minPriceChange.emit(model)
  }
  showFilter(index: number){
    this.visibleArray[index] = !this.visibleArray[index]
  }
}
