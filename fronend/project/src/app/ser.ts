import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

export class uploadService {
    constructor(private http: HttpClient) {

    }

    // private url = 'https://api.cloudinary.com/v1_1/dnp14omap/image/upload'

    // uploadImage(vals: any): Observable<any> {
    //     let data = vals;
    //     return this.http.post(this.url, data)
    // }



}