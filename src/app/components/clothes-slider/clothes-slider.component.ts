import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../product";
import {HttpService} from "../../services/http.service";
@Component({
  selector: 'app-clothes-slider',
  templateUrl: './clothes-slider.component.html',
  styleUrls: ['./clothes-slider.component.scss']
})
export class ClothesSliderComponent implements OnInit{
  @Input() products: Product[] = []
  @Input() productsAmount: number = 8
  @Input() itemsOnSlide: number = 4
  @Input() sliderTitle: string = ''
  slidersAmount: number = 0
  constructor() {}
  ngOnInit(){
    this.slidersAmount = Math.ceil(this.productsAmount / this.itemsOnSlide)
  }
  createRange(number: number){
    return new Array(number)
  }

}
