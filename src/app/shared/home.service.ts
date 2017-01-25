import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { Category } from './Category';
import { Product } from './Product';
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {

    constructor(private http: Http, public authHttp: AuthHttp) { }

    getChildCategoriesByParent(name:string): Observable<Category[]> {
        return this.http.get(`http://localhost:3000/${name}`).map(res => res.json());
    }

    getProducts(): Observable<Product[]> {
        return this.authHttp.get("http://localhost:3000/").map(res => res.json());
    }


    getProductById(id: number) {

        console.log("id  service  ", id);
        return this.authHttp.get(`http://localhost:3000/${id}`)
            .map((res: Response) => res.json());

    };

    getCategories(): Observable<Category[]> {
        return this.http.get("http://localhost:3000/").map(res => res.json());
    }

    getCategoryById(id: number) {

        console.log("id  service  ", id);
        return this.authHttp.get(`http://localhost:3000/${id}`)
            .map((res: Response) => res.json());

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
        console.error("errMsg", errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
