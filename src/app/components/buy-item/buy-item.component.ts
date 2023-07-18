import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../../product";
import {ActivatedRoute} from "@angular/router";
import {filter, map, switchMap} from "rxjs";
import {HttpService} from "../../services/http.service";
import {animate, state, style, transition, trigger, useAnimation} from "@angular/animations";
import {transitionAnimation} from "../../enterAnimation";

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.scss'],
  animations: [
    trigger('enterToPage', [
      transition(':enter',
        useAnimation(transitionAnimation)
      )]
    )
  ]
})
export class BuyItemComponent implements OnInit {
  @ViewChild('productImageContainer') productImageContainer!: ElementRef
  product: Product | undefined
  similarProducts: Product[] = []
  similarProductsAmount: number = 4
  itemsOnSlide: number = 3
  sliderTitle: string = 'Схожі товари'

  id: number | undefined
  protected readonly document = document;
  mouseX: number = 0;
  mouseY: number = 0;

  constructor(private route: ActivatedRoute, private http: HttpService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    )
      .subscribe(data => {
        this.id = +data
        this.http.getProducts()
          .pipe(
            map(array => {
              this.product = array[this.id! - 1]
              return array.filter(item => item.category === this.product?.category && item !== this.product)
            })
          )
          .subscribe({
            next: products => {
              this.similarProducts = products
              this.similarProductsAmount = products.length
            }
          })
      })
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const elementRect = this.productImageContainer.nativeElement.getBoundingClientRect()
    this.mouseX = event.x - elementRect.left
    this.mouseY = event.y - elementRect.top
  }

  @HostListener('mousemove', ['$event'])
  trackMouse(event: MouseEvent) {
    document.querySelector('.approximation-image')
      ?.setAttribute('style',
        `transform: scale(1.2) translateX(${-this.mouseX}px) translateY(${-this.mouseY}px)`)
  }

  showApproximation() {
    document.querySelector('.approximation')?.classList.toggle('approximation-visible')
  }


}
