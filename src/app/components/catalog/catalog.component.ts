import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Product} from "../../../product";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit{
  constructor(private http: HttpService) {}

  products: Product[] = []

  ngOnInit() {
    this.http.getProducts().subscribe({next: (data: Product[]) => this.products = data})
  }

}
