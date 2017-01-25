import { Component, OnInit } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
