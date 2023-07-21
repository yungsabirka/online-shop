import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Product} from "../../../product";
import {transition, trigger, useAnimation} from "@angular/animations";
import {transitionAnimation} from "../../enterAnimation";

interface IButton{
  buttonNumber: number,
  isButtonActivated: boolean
}
@Component({
  selector: 'app-catalog-elements',
  templateUrl: './catalog-elements.component.html',
  styleUrls: ['./catalog-elements.component.scss'],
  animations: [
    trigger('enterToPage', [
      transition(':enter',
        useAnimation(transitionAnimation)
      )]
    )
  ]
})
export class CatalogElementsComponent implements OnInit{
  @Input() filterTitle: string = ''
  @Input() minPrice: number = 0
  @Input() maxPrice: number = 0
  productsAmountOnPage: number
  _firstProductOnPage: number = 0
  _lastProductOnPage: number = 0
  buttons: IButton[] = []
  buyButtons: boolean[] = []
  products: Product[] = []


  set firstProductOnPage(value: number){
    if(value < 0)
      this._firstProductOnPage = 0
    else
      this._firstProductOnPage = value
  }
  get firstProductOnPage() {return this._firstProductOnPage}

  set lastProductOnPage(value: number){
    if(value > this.products.length)
      this._lastProductOnPage = this.products.length
    else
      this._lastProductOnPage = value
  }
  get lastProductOnPage() {return this._lastProductOnPage}
  constructor(public http: HttpService) {
    this.productsAmountOnPage = 6
    this._lastProductOnPage = this.productsAmountOnPage
    this._firstProductOnPage = this._lastProductOnPage - this.productsAmountOnPage
  }
  ngOnInit(){
    this.http.getProducts()
      .subscribe({next: (data: Product[]) => {
          this.products = data
          for (let i = 0; i< this.products.length; i++){
            this.buyButtons.push(false)
          }
          for(let i = 0; i<Math.ceil(this.products.length / this.productsAmountOnPage); i++){
            this.buttons.push({buttonNumber: i, isButtonActivated: false})
          }
          this.buttons[0].isButtonActivated = true
        }})
  }

  changeElements(buttonNumber: number){
    this.firstProductOnPage = this.productsAmountOnPage * buttonNumber
    this.lastProductOnPage = this.firstProductOnPage + this.productsAmountOnPage
  }
  changeButtonActivate(buttonNumber: number){
    for (let i = 0; i< this.buttons.length; i++){
      this.buttons[i].isButtonActivated = i === buttonNumber;
    }
  }

}
