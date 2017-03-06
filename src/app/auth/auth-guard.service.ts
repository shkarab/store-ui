import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router,Route, NavigationStart, 
          Event as NavigationEvent, 
          NavigationCancel,
          RoutesRecognized,
          CanActivate,CanActivateChild,CanLoad,
          ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (!this.authService.isLogined()) {
       let url: string = state.url;
       localStorage.setItem('cachedurl',url.split('?')[0]);
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

