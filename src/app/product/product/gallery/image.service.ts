import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable';
import {Location} from '@angular/common';
import 'rxjs/add/operator/catch';

@Injectable()
export class ImageService {

    constructor(private http: Http, private location: Location) { 
       
    }


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
