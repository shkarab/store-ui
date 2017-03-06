import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Category } from './shared/Category';
import { Product } from './shared/Product';
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable';
import {Location} from '@angular/common';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

    constructor(private http: Http) { 

    }


    //is used to get all of categories
    getCategories(): Observable<Category[]> {
        return this.http.get("http://localhost:3000/api/category").map(res => res.json());
    }

    
    
  
    //is used to get specific products with paging 
    getProducts(): Observable<any> {
    
        return this.http.get(`http://localhost:3000/api/product`).map(res => res.json());
    }

    getProductById(id: number) {

        console.log("id  service  ", id);
        return this.http.get(`http://localhost:3000/api/product/${id}`)
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
        console.error("errMsg", errMsg); 
        return Observable.throw(errMsg);
    }

}
