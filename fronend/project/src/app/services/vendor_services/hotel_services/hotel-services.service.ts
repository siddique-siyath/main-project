import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelServicesService implements OnInit{

  
  private _AddHotelrUrl = "http://localhost:3000/vendor/add_hotel "
  data: any;

  constructor(private http:HttpClient) { }

  AddHotel(user: any) {
    console.log(user);
    return this.http.post<any>(this._AddHotelrUrl, user) 
  }

  ngOnInit(): void {
      
  }

}
