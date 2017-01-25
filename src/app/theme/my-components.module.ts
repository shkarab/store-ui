import { NgModule }      from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {ShMenu,ShMenuItem} from './components';


const NGA_COMPONENTS = [
 ShMenu,ShMenuItem
];
@NgModule({
  declarations: [
    NGA_COMPONENTS
  ],
  imports: [
    SharedModule,
     RouterModule
  
    // RouterModule.forRoot(appRoutes)
   
  ],
  exports: [NGA_COMPONENTS]

})
export class MyComponentsModule { }
