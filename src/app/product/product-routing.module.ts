import { Routes } from "@angular/router";
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';

export const productRoutes: Routes = [
    
    { path: 'product/:id', component: ProductComponent },
    { path: 'categories/:name', component: CategoriesComponent }


]
