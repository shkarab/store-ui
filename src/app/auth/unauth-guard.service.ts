import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class UnAuthGuardService implements CanActivate {

  constructor(private unAuthService: AuthService, private router: Router) {}

 canActivate(): boolean {
   
    if (this.unAuthService.isLogined()) {
     this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
 
    
