import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../shared/Product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: Product[];
  constructor(private _homeServices: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  // getting products 
  getProducts() {
    this.productList = [];
    this._homeServices.getProducts().subscribe(res => {
        this.productList = res.data;
        console.log(this.productList);
      });
  }
}
