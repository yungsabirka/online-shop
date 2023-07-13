import { Component } from '@angular/core';
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
    },
    {
      title: 'Корзина',
      link: '/basket'
    }
  ]
}
