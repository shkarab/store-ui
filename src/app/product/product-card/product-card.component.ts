import { Component, OnInit,Input } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import { ProductService } from '../product.service';
import { Product } from '../shared/product';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {
@Input()
product:Product;
  constructor(private _homeServices: ProductService) { }

  ngOnInit() {
    
    //  this._homeServices.getSubCategories(params['name']).subscribe(res => {
    //     this.topCategories = res[0].children;
    //     console.log("topCategories", this.topCategories);
    //   });
  }
 

}