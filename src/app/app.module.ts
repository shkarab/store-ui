import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './app-routing.module'
import { RouterModule } from "@angular/router";
import { Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader } from "ng2-translate/ng2-translate";
import { TranslateLoader } from "ng2-translate";
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import {ProductService} from './product/product.service';
import { AuthModule } from './auth/auth.module';


export function translateLoaderFactory(http: any) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent
    
   
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AuthModule,
    CoreModule,
    SharedModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: translateLoaderFactory,
      deps: [Http]
    }),
    RouterModule.forRoot(appRoutes)

  ],

  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

