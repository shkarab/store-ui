import {Routes} from "@angular/router";
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
export const appRoutes:Routes=[
   {path: '', component: ProductComponent},
    { path: 'categories/:name', component: CategoriesComponent }


]
