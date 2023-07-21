import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Product} from "../../../product";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  constructor(private http: HttpService) {}

  products: Product[] = []

  filterTitle: string = ''
  @Input() maxPrice: number = Math.max()
  @Input() minPrice: number = Math.min()

  ngOnInit() {
    this.http.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data
        this.products.forEach(product => {
          Number(product.price) > this.maxPrice ? this.maxPrice = Number(product.price) : null
          Number(product.price) < this.minPrice ? this.minPrice = Number(product.price) : null
        })

      }
    })

  }

}
