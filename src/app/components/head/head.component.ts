import { Component } from '@angular/core';

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
      title: 'Каталог',
      link: '/catalog'
    },
    {
      title: 'Корзина',
      link: '/basket'
    },
    {
      title: 'Контакти',
      link: '/contacts'
    }
  ]
}
