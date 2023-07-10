import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {Product} from "../../product";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  errorMessage: String = ''
  constructor(private http: HttpClient) { }

  getProducts(limit?: number): Observable<Product[]>{
    let link: string = this.getHttpLink(limit)

    return this.http.get(link).pipe(map((data: any)=>{
        return data.map(function(product:any): Product{
          return new Product(product.id, product.title, product.price, product.category,
            product.description, product.image, product.rating)
        })
      }),
      catchError(err => {
        console.log(err)
        this.errorMessage = err.message
        return[]
      }))
  }

  private getHttpLink(_: number | undefined): string {
    if(_ !== undefined)
      return `https://fakestoreapi.com/products?limit=${_}`
    else
      return 'https://fakestoreapi.com/products'
  }
}
