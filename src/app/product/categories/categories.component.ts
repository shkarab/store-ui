import { Component, OnInit } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../shared/Product';
import {Location} from '@angular/common';

interface ProductObject{
  results:Product[],
  total:Number,
  options:Object

}

@Component({
  selector: 'Categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})



export class CategoriesComponent implements OnInit {
  breads: string[] = [];
  bread;
  topCategory: string;
  p:Number;
  newParamsToUrl: string;
  c: string;
  itemPerPage:Number;
  currentPage:Number;
  productObject: ProductObject;
  subCategories;
  newItem;
  currentCategory;
 
  constructor(private _homeServices: ProductService,private _router: Router, private router: ActivatedRoute,private location: Location) 
  { }

  ngOnInit() {

    this.currentPage=1;
    this.itemPerPage=3;


    this.router.params.subscribe((params) => {
          this.topCategory = params['name'];
          this._homeServices.getCategoryByName(this.topCategory).subscribe(res => {
          this.subCategories = res.children;
          this.breads=res.category.split("/");
          this.breads.shift();
          this.currentCategory=res.name;
            

            //getting products of current category 
            this.getProducts(this.currentPage);
       
      });
    });
  }
  
   // getting products 
    getProducts(currPage) {
        
        this._homeServices.getProducts(currPage,this.itemPerPage, this.currentCategory).subscribe(res => {
          this.productObject = res;
          console.log("this.products",this.productObject.results);

        });
      }


}


  






