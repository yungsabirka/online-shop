import { Component } from '@angular/core';

interface IFooterElement{
  img: string, title: string, subtitle: string
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerElements: IFooterElement[] = [
    {
    img: '../assets/footer-images/pin.svg',
    title: 'Адреса',
    subtitle: 'м. Київ, вул. Київська'
    },
    {
      img: '../assets/footer-images/tel.svg',
      title: 'Телефон',
      subtitle: '+38 (099) 000 00 00'
    },
    {
      img: '../assets/footer-images/email-1.svg',
      title: 'Email',
      subtitle: 'example@gmail.com'
    },
    {
      img: '../assets/footer-images/wall-clock2.svg',
      title: 'График роботи',
      subtitle: 'Пн - Вс / 09:00 - 21:00'
    },
  ]
}
