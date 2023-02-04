import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  private _registerUrl = "http://localhost:3000/user_signup"
  private _loginUrl = "http://localhost:3000/user_login"

  private url = 'https://api.cloudinary.com/v1_1/dnp14omap/image/upload'
  private _userProfile = 'http://localhost:3000/user_profile'
  private _insertPhoto = 'http://localhost:3000/user_insertPhoto'

  private _hotel = 'http://localhost:3000/hotel'
  private _hotelDetail = 'http://localhost:3000/hotel_details'

  private _hotelRoomBook = 'http://localhost:3000/book_room'

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    console.log(user);
    return this.http.post<any>(this._registerUrl, user)
  }


  loginUser(user: any) {
    console.log("yes");
    console.log(this._loginUrl);
    console.log(user);
    return this.http.post<any>(this._loginUrl, user)
  }


  loggedIn() {
    return !!localStorage.getItem('userToken')
  }


  profileImage(vals: any) {
    let data = vals;
    return this.http.post(this.url, data)
  }


  getUserData(email: any) {
    console.log(email);
    return this.http.get<any>(this._userProfile, { params: email })
  }


  insertProfile(data: any) {
    console.log(data);
    return this.http.post<any>(this._insertPhoto, data)
  }


  hotel() {
    return this.http.get<any>(this._hotel)
  }


  hotel_details(id: any, email: any) {
    let data = {
      id: id,
      email: email
    }
    console.log(data);
    return this.http.post<any>(this._hotelDetail, data)
  }


  async orderRoom(id: any) {
    let email = await localStorage.getItem('hotelId')
    let data = {
      id: id,
      email: email
    }
    return this.http.post<any>(this._hotelRoomBook,data) 
   }



}
