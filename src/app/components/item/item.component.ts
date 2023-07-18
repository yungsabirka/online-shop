import {Component, Input} from '@angular/core';
import {Product} from "../../../product";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() public myProduct: Product | undefined
}
