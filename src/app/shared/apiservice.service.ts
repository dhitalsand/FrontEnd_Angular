import { Users } from './../registration/users.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    localvar: any;
    constructor(private httpClient: HttpClient) { }

    baseApi: string = 'http://localhost:8081/api/';
    doPost(uri: string, data: Object): Observable<Object> {
        let actualUri: string = this.baseApi.concat(uri);
        return this.httpClient.post(actualUri, data);
    }

    doGet(uri: string): Observable<Object> {
        let actualUri: string = this.baseApi.concat(uri);
        return this.httpClient.get(actualUri);

    }
}