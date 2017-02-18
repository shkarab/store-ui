import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class UnAuthGuardService implements CanActivate {

  constructor(private unAuthService: AuthService, private router: Router) {}

  canActivate() {
   
    if (this.unAuthService.isLogined()) {
      this.router.navigate(['product']);
      return false;
    }
    return true;
  }

}