import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { TokenService } from './token.service';
import { User } from './model/user';
import {
  Router, Route, NavigationStart,
  Event as NavigationEvent,
  NavigationCancel,
  RoutesRecognized,
  CanActivate, CanActivateChild, CanLoad,
  ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthService {
  private baseURL = 'https://localhost:4200';
  private authConfig = {

    "linkedin": {
      "authEndpoint": this.baseURL + "/auth/linkedin",
      "clientId": "8176r44lz2ewos",
      "redirectURI": this.baseURL + "/admin"
    },
    "facebook": {
      "authEndpoint": "http://localhost:3001/auth/facebook",
      "clientId": "929055083862567",
      "redirectURI": this.baseURL +"/register"
      //+"/product"
    },
    "google": {
      "authEndpoint": this.baseURL + "/auth/google",
      "clientId": "77954512562-eftl8up04q1g3aha2mjg5h6bgel9svkk.apps.googleusercontent.com",
      "redirectURI": this.baseURL + "/admin"
    }

  };
  private configObj = { "authEndpoint": "", "clientId": "", "redirectURI": "" };
  private code: string;
  private cachedURL: string;

  private loading: boolean;
  constructor(private tokenService: TokenService, private router: Router, private http: Http) {
    let config = localStorage.getItem("authConfig");
    if (config != "") {
      this.configObj = JSON.parse(config);
    }
    router.events.forEach((event: NavigationEvent) => {
      if (event instanceof RoutesRecognized) {
        let params = new URLSearchParams(event.url.split('?')[1]);
        // this.code = params.get('code');
        if (params.get('code'))
          this.tokenService.setToken(params.get('code'));
        if (event.url.split('?')[0] == "/login" && this.isLogined()) {
          this.router.navigate([localStorage.getItem('cachedurl')]);
        }
      }
    });
  }

  login(user: User): Observable<User> {

    let bodyString = JSON.stringify(user);

    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:3000/auth/local", bodyString, options) // ...using post request
      .map(res => {
        res.json();
        console.log('authenticate result', res);

        let body = res['_body'];
        var data = JSON.parse(body);
        if (!body && data['token']) {
          throw new Error("no token in response");
        }
        this.tokenService.setToken(data['token']);
        return true;
      }
      ) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if 


  };

  logout() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('/');
  }

  isLogined(): boolean {
    let token = this.tokenService.getToken();
    return tokenNotExpired(null, token);

  }

  register(user: User): Observable<User> {

    let bodyString = JSON.stringify(user);

    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:3000/api/users", bodyString, options) // ...using post request
      .map(res => {

        let body = res['_body'];
        var data = JSON.parse(body);
        if (!body && data['token']) {
          throw new Error("no token in response");
        }
        this.tokenService.setToken(data['token']);

        this.getUserInfo().subscribe(res => {
          this.setCurrentUser(res);
        });


      }
      ) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if 


  };

  getUserInfo(): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${this.tokenService.getToken()}`);
    let options = new RequestOptions({ headers: headers });


    return this.http.get(`http://localhost:3000/api/users/me`, options).map(res => res.json());


  }

  setCurrentUser(user) {

    localStorage.setItem("userInfo", JSON.stringify(user));
  }
  getCurrentUser() {
    let b = JSON.parse(localStorage.getItem("userInfo"));
    return b;
  }
  //    let body = res['_body'];
  // var data = JSON.parse(body);
  // if (!body && data['user']) {
  //   throw new Error("no token in response");
  // }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    let body = res.json();

    return body || {};
  }

  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.error("errMsg", errMsg);
    return Observable.throw(errMsg);
  }


  //  loginWithFacebook(): Observable<User> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  //     let options = new RequestOptions({ headers: headers });

  //     return this.http.get("http://localhost:3001/auth/facebook",options) // ...using post request
  //       .map(res => {
  //         res.json();
  //         console.log('authenticate result', res);

  //         let body = res['_body'];
  //         var data = JSON.parse(body);
  //         if (!body && data['token']) {
  //           throw new Error("no token in response");
  //         }
  //         this.tokenService.setToken(data['token']);
  //         return true;
  //       }
  //       ) // ...and calling .json() on the response to return data
  //       .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if 


  //   };


  public auth(provider: string): void {
    //   if(provider == "linkedin" && !this.isLoggedIn()){
    //     localStorage.setItem("authConfig",JSON.stringify(this.authConfig.linkedin));
    //     window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?client_id='+this.authConfig.linkedin.clientId+'&redirect_uri='+this.authConfig.linkedin.redirectURI+'&response_type=code';
    // }
    if (provider == "facebook") {
      localStorage.setItem("authConfig", JSON.stringify(this.authConfig.facebook));
     // window.location.href = 'https://www.facebook.com/v2.8/dialog/oauth?client_id=' + this.authConfig.facebook.clientId + '&redirect_uri=' + this.authConfig.facebook.redirectURI + '&scope=email';
    }
    //  if(provider == "google" && !this.isLoggedIn()){ 
    //     localStorage.setItem("authConfig",JSON.stringify(this.authConfig.google));
    //      window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id='+this.authConfig.google.clientId+'&redirect_uri='+this.authConfig.google.redirectURI+'&scope=email%20profile';
    // }
    else {
      this.router.navigate([this.cachedURL]);
    }
  }
}
