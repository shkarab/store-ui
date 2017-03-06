import { Routes } from "@angular/router";
// import { CategoriesComponent } from './product/categories/categories.component';


export const appRoutes: Routes = [
      { path: '', redirectTo: '/products', pathMatch: 'full' },
     { path: '', loadChildren: 'app/product/product.module#ProductModule' }
    // {path: '', component: ProductComponent},
    //    { path: 'categories/:name', component: CategoriesComponent },
    //    { path: 'product/:id', component: ProductComponent }

]
