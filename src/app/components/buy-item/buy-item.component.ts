import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../product";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.scss']
})
export class BuyItemComponent implements OnInit{
  product: Product | undefined
  id: number | undefined
  constructor(private route: ActivatedRoute,private http: HttpService) {}

  ngOnInit(){
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => {
        this.id = +data
        this.http.getProducts(this.id)
          .subscribe({next: products => this.product = products[this.id!-1]})
      })

  }
}
