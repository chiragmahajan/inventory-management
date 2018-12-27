import { Component, OnInit,Input,HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-image',
  template: `<img class="product-image" [src]="product.imageUrl">`,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  constructor() { }
  @Input() product: Product;
@HostBinding('attr.class') cssClass = 'ui small image';
  ngOnInit() {
  }

}
