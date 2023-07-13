import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Product} from "../../../product";

@Component({
  selector: 'app-catalog-elements',
  templateUrl: './catalog-elements.component.html',
  styleUrls: ['./catalog-elements.component.scss']
})
export class CatalogElementsComponent implements OnInit{
  firstProduct: number
  secondProduct: number

  constructor(public http: HttpService) {
    this.firstProduct = 0
    this.secondProduct = 6
  }
  buyButtons: boolean[] = []
  products: Product[] = []
  ngOnInit(){
    this.http.getProducts()
      .subscribe({next: (data: Product[]) => {
          this.products = data
          this.buyButtons.length = this.products.length
          this.buyButtons.forEach(btn => btn = false)
        }})
  }

  changeElements(first: number, second: number){
    this.firstProduct = first;
    this.secondProduct = second;
  }
}
