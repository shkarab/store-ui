import { Routes } from "@angular/router";
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuardService } from '../auth/auth-guard.service';
export const productRoutes: Routes = [
    
    { path: 'product/:id', component: ProductComponent,canActivate: [AuthGuardService] },
    { path: 'products', component: ProductsComponent ,canActivate: [AuthGuardService]},
    { path: 'categories/:name', component: CategoriesComponent ,canActivate: [AuthGuardService]}


]
