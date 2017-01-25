import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRoutes } from './app-routing.module'
import { RouterModule } from "@angular/router";
import { Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader } from "ng2-translate/ng2-translate";
import { TranslateLoader } from "ng2-translate";
import { SharedModule } from './shared/shared.module';
import { MyComponentsModule } from './theme/my-components.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';


export function translateLoaderFactory(http: any) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,CategoriesComponent,ProductComponent,ProductCardComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MyComponentsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: translateLoaderFactory,
      deps: [Http]
    }),
    RouterModule.forRoot(appRoutes)

  ],
  // exports: [TranslateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

