import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule,Http ,RequestOptions} from '@angular/http';
import { MaterialModule } from '@angular/material';
import {Ng2MaterialModule,Ng2MaterialNodeModule} from "ng2-material";
import {TranslateModule} from 'ng2-translate';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {HomeService} from './home.service';
import { AUTH_PROVIDERS ,AuthHttp,AuthConfig} from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}
@NgModule({
  imports: [CommonModule, 
  FormsModule,
  HttpModule,
  MaterialModule.forRoot()
   ],
  declarations: [ 
   
  ],
  providers: [AuthService,HomeService,AuthGuard,{
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    }],
    
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    TranslateModule,
    Ng2MaterialModule,
    Ng2MaterialNodeModule,
    MaterialModule
  
  ]
})
export class SharedModule { }