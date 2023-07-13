import {Component, OnInit} from '@angular/core';
import {Product} from "../../../product";
import {HttpService} from "../../services/http.service";
@Component({
  selector: 'app-clothes-slider',
  templateUrl: './clothes-slider.component.html',
  styleUrls: ['./clothes-slider.component.scss']
})
export class ClothesSliderComponent implements OnInit{
  products: Product[] = []
  productsAmount: number = 8
  constructor(private httpService: HttpService) {}

  ngOnInit(){
    this.httpService
      .getProducts(this.productsAmount).subscribe({next: data =>
      this.products = data})
  }

  logProducts(){
    console.log(this.products)
  }
}
