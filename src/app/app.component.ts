import {Component, Input} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop-app';

  isShowBasket: boolean = false


}
