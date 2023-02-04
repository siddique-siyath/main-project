import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelServicesService implements OnInit {


  private _AddHotelrUrl = "http://localhost:3000/vendor/add_hotel"
  private _verifyUrl = "http://localhost:3000/vendor/verify"

  private _AddHotelServices = "http://localhost:3000/vendor/add_hotel_services"
  private _editHotelServices = "http://localhost:3000/vendor/edit_hotel_services"
  private _deleteHotelService = "http://localhost:3000/vendor/delete_hotel_services"
  private _roomsDetails = "http://localhost:3000/vendor/hotel_details"
  private _editDetails = "http://localhost:3000/vendor/edit_details"

  private url = 'https://api.cloudinary.com/v1_1/dnp14omap/image/upload'

  // private _insertPhoto = 'http://localhost:3000/user_insertPhoto'


  data: any;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {

  }




  AddHotel(user: any) {
    console.log(user);
    return this.http.post<any>(this._AddHotelrUrl, user)
  }

  verification(userEmail: any) {
    return this.http.get<any>(this._verifyUrl, { params: userEmail })
  }


  // insertProfile(data: any) {
  //   console.log(data);
  //   return this.http.post<any>(this._insertPhoto, data)
  // }

  imageInsert(vals: any) {
    let data = vals;
    return this.http.post(this.url, data)
  }


  addHotelServices(service: any) {
    console.log(service);
    let email: any = localStorage.getItem('hotelemail')
    return this.http.post<any>(this._AddHotelServices, { email, service })
  }


  getRoomsData(email: any) {
    return this.http.get<any>(this._roomsDetails, { params: email })
  }


  getEditData(id: any) {
    let email = localStorage.getItem('hotelemail')
    const data: any = {
      param1: id,
      param2: email,
    }

    return this.http.get<any>(this._editDetails, { params: data })
  }


  editHotelData(data: any, id: any) {
    let email = localStorage.getItem('hotelemail')
    return this.http.patch<any>(this._editHotelServices, { data, id, email })
  }


  deleteData(id: any) {
    let email = localStorage.getItem('hotelemail')
    let data:any = {
      id: id,
      email: email
    }
    return this.http.delete<any>(this._deleteHotelService, {params:data})
  }

}
