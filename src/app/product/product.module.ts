import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { productRoutes } from './product-routing.module'
import { SharedModule } from '../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from "@angular/router";
import { GalleryComponent } from './product/gallery/gallery.component';
import { ImageService } from './product/gallery/image.service';
import { ProductsComponent } from './products/products.component';
// import {ProductService} from './product.service';

@NgModule({
  imports:      [ SharedModule,RouterModule.forChild(productRoutes)],
  declarations: [ ProductComponent, ProductCardComponent, CategoriesComponent, GalleryComponent, ProductsComponent],
  exports:      [ ProductComponent, ProductCardComponent, CategoriesComponent ],
  providers:    [ ImageService ]
})
export class ProductModule { }