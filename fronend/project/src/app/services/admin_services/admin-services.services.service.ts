import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesServicesService {


  private _loginUrl = "http://localhost:3000/admin/admin_login"
  private _userDataUrl = "http://localhost:3000/admin/user_data"
  private _BlockUserUrl = "http://localhost:3000/admin/user_block"
  private _UnBlockUserUrl = "http://localhost:3000/admin/user_unblock"
  private _vendorData = "http://localhost:3000/admin/vendor_data"
  private _blockVendorUrl = "http://localhost:3000/admin/vendor_block"
  private _unblockVendorUrl = "http://localhost:3000/admin/vendor_unblock"
  private _verifyVendorUrl = "http://localhost:3000/admin/vendor_verify"

  constructor (private http:HttpClient) {}


  loginUser(user: any) {
    console.log("yes");
    console.log(this._loginUrl);
    console.log(user);
    return this.http.post<any>(this._loginUrl, user)
  }

 getUserData(){
    return this.http.get<any>(this._userDataUrl);
  }

  BlockUser(user:any) {
    return this.http.post<any>(this._BlockUserUrl,user)
  }

  UnBlockUser(user:any) {
    return this.http.post<any>(this._UnBlockUserUrl,user)
  }

  getVendorData(){
    return this.http.get<any>(this._vendorData);
  }


  blockVendor(vendor:any) {
    return this.http.post<any>(this._blockVendorUrl,vendor)
  }

  unblockVendor(vendor:any) {
    return this.http.post<any>(this._unblockVendorUrl,vendor)
  }

  verifyVendor(user:any) {
    return this.http.post<any>(this._verifyVendorUrl,user)
  }



  loggedIn() {
    return !!localStorage.getItem('adminToken')
  }

}
