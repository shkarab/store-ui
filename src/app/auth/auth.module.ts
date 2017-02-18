import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UnAuthGuardService } from './unauth-guard.service';
import { TokenService } from './token.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule
    
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService, AuthGuardService , UnAuthGuardService,TokenService],

})
export class AuthModule { }
