import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { TokenService } from './token.service';
import { User } from './model/user';


@Injectable()
export class AuthService {

  constructor(private tokenService: TokenService, private router: Router, private http: Http) { }

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

        this.getUserInfo().subscribe(res=>{
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


    return this.http.get(`http://localhost:3000/api/users/me`,options).map(res => res.json());
     
      
  }

  setCurrentUser(user) {

    localStorage.setItem("userInfo", JSON.stringify(user));
  }
  getCurrentUser() {
    let b=JSON.parse(localStorage.getItem("userInfo"));
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

}
