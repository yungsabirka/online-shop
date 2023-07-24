import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../product";
import {BasketService} from "../../services/basket.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  animations: [
    trigger('showBasket', [
      state('show', style({
        position: 'fixed',
        left: '74vw',
        top: '0',
        visibility: 'visible'
      })),
      state('notShow', style({
        position: 'absolute',
        left: '100vw',
        top: '0',
        visibility: 'collapse'
      })),
      transition('notShow => show', [
        animate('0.4s')
      ]),
      transition('show => notShow', [
        animate('0.4s')
      ])
    ])
  ]
})
export class BasketComponent {
  title: string = 'Корзина'
  subtitle: string = 'У вашій корзині немає товарів'
  @Input() isShown = false
  @Output() isShownChange = new EventEmitter<boolean>
  toggleShowBasket(){
    this.isShown = !this.isShown
    this.isShownChange.emit(this.isShown)
  }
  constructor(public basketService: BasketService) {}



}
