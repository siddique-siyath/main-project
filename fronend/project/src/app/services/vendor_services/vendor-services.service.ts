import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorServicesService {

  private _registerUrl = "http://localhost:3000/vendor/vendor_signup"
  private _loginUrl = "http://localhost:3000/vendor/vendor_login"

  // data = new Subject<any>();

  data: any;
  email: any;

  setEmail(email: any) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  constructor(private http: HttpClient) { }

  // setData(data: any) {
  //   this.data.next(data);
  // }


  registerVendor(user: any) {
    console.log(user);
    console.log(user);
    return this.http.post<any>(this._registerUrl, user)
  }

  loginVendor(vendor: any) {
    console.log("yes");
    console.log(this._loginUrl);
    console.log(vendor);
    return this.http.post<any>(this._loginUrl, vendor)
  }

}
