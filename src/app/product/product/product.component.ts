import { Component, OnInit } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Product } from '../shared/product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  id;
  product:Product;
  constructor(private _homeServices: ProductService, private router: ActivatedRoute) { }
  private flexBorderSize: number = 3
  private flexImageSize: number = 3

  ngOnInit() {

    this.router.params.subscribe((params) => {
      this.id = params['id'];
      
        this._homeServices.getProductById(this.id).subscribe(res => {
          this.product = res;
          console.log("product", res);
        

        })
      
    })
  }
}
 