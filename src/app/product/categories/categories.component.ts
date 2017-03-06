import { Component, OnInit } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { ProductService } from '../product.service';
import { Category } from '../shared/Category';
@Component({
  selector: 'Categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})



export class CategoriesComponent implements OnInit {
  categories: Category[];
  constructor(private _homeServices: ProductService)
  { }

  ngOnInit() {
    this._homeServices.getCategories().subscribe(res => this.categories = res);

  }


}









