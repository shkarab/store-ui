import { Component, OnInit } from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'Categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
bread;
categories;
  constructor( private _homeServices: HomeService,private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.bread = params['name'];
      
      // this.title = params['name'];
      this._homeServices.getChildCategoriesByParent(this.bread).subscribe(res => {
        this.categories = res;
     });
    })
  }


}
