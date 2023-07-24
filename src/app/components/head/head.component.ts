import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";

interface INav{
  title: string,
  link: string
}
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {
  @Input() isShowBasket: boolean = false
  @Output() isShowBasketChange = new EventEmitter<boolean>

  toggleShowBasket(){
    this.isShowBasket = !this.isShowBasket
    this.isShowBasketChange.emit(this.isShowBasket)
  }

  nav: INav[] = [
    {
      title: 'Головна',
      link: ''
    },
    {
      title: 'Контакти',
      link: '/contacts'
    },
    {
      title: 'Каталог',
      link: '/catalog'
    }
  ]
}
