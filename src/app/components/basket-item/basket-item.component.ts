import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../product";
import {BasketService, IBasketProduct} from "../../services/basket.service";


@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent {
  @Input() public basketItem: IBasketProduct | undefined

  // @Output() basketItemChange = new EventEmitter<IBasketProduct>
  // onBasketItemChange(model: IBasketProduct){
  //   this.basketItemChange.emit(model)
  // }
  constructor(public basketService: BasketService) {
  }
}
