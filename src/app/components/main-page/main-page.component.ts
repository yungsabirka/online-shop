import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Product} from "../../../product";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  sliderTitle: string = 'Нова Колекція'
  productSliderAmount: number = 8
  itemsOnSlide: number = 4
  products: Product[] = []
  constructor(private httpService: HttpService) {}
  ngOnInit(){
    this.httpService
      .getProducts(this.productSliderAmount).subscribe({next: data =>
      this.products = data})
  }
}
