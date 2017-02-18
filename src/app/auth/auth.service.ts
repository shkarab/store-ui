import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Http, Headers,Response, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { TokenService } from './token.service';
import { User } from './model/user';


@Injectable()
export class AuthService {

  constructor(private tokenService:TokenService,private router:Router,private http:Http ) { }

   login(user:User):Observable<User>{
      
       let bodyString = JSON.stringify(user); 
       
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers });
        return this.http.post("http://localhost:3000/", bodyString, options) // ...using post request
                         .map((res:Response) => 
                         {
                           res.json();
                           if(res['token']){
                             this.tokenService.setToken(res['token']);
                             return true;
                           }
                           else{
                              throw new Error("no token in response");
                              
                           }
                         
                         }
                         ) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if 
     

   };
  
  logout(){
    this.tokenService.removeToken();
     this.router.navigateByUrl('/product');
  }

  isLogined():boolean{
   let token = this.tokenService.getToken();
    return tokenNotExpired(null, token);

  }

  register(user:User):Observable<User>{
      
       let bodyString = JSON.stringify(user); 
       
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers });
        return this.http.post("http://localhost:3000/", bodyString, options) // ...using post request
                         .map((res:Response) => 
                         {
                         res.json();
                         }
                         ) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if 
     

   };

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
