import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';
import { MaterialModule } from '@angular/material';
import {Ng2MaterialModule,Ng2MaterialNodeModule} from "ng2-material";
import {TranslateModule} from 'ng2-translate';
import {Ng2PaginationModule} from 'ng2-pagination';


@NgModule({
  imports: [CommonModule, 
  FormsModule,
  HttpModule,
  Ng2PaginationModule,
   MaterialModule.forRoot()
    ],
  declarations: [ 
   
  ],
  providers: [],
    
  exports: [
    CommonModule,
    FormsModule,
    Ng2PaginationModule,
    HttpModule,
    TranslateModule,
    Ng2MaterialModule,
    Ng2MaterialNodeModule,
    MaterialModule
  
  ]
})
export class SharedModule { }