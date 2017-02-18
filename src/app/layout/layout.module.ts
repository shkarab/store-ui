import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ShellComponent} from './shell/shell.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from "@angular/router";
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [SharedModule,RouterModule],
  declarations: [ 
   HeaderComponent,FooterComponent,ShellComponent, SearchComponent, UserComponent
  ],
  providers: [],
    
  exports: [
    
  ShellComponent
  ]
})
export class LayoutModule { }