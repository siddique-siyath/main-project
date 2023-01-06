import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServicesService {

  private _addRestaurantUrl = "http://localhost:3000/vendor/add_restaurant "
  private _verifyUrl = "http://localhost:3000/vendor/verify"
  
  data: any;

  constructor(private http:HttpClient) { }

  addRestaurant(user: any) {
    console.log(user);
    return this.http.post<any>(this._addRestaurantUrl, user) 
  }

  verification(userEmail:any){
    return this.http.get<any>(this._verifyUrl,{params:userEmail})
  }

  ngOnInit(): void {
      
  }

}
