import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServicesService {

  private _addRestaurantUrl = "http://localhost:3000/vendor/add_restaurant "
  private _verifyUrl = "http://localhost:3000/vendor/verify"

  private _AddRestaurantServices = "http://localhost:3000/vendor/add_restaurant_food"
  private _foodsDetails = "http://localhost:3000/vendor/restaurant_food_details"

  private url = 'https://api.cloudinary.com/v1_1/dnp14omap/image/upload'
  
  data: any;

  constructor(private http:HttpClient) { }

  addRestaurant(user: any) {
    console.log(user);
    return this.http.post<any>(this._addRestaurantUrl, user) 
  }

  verification(userEmail:any){
    return this.http.get<any>(this._verifyUrl,{params:userEmail})
  }


  imageInsert(vals: any) {
    let data = vals;
    return this.http.post(this.url, data)
  }


  addRestaurantServices(food: any) {
    console.log(food);
    let email: any = localStorage.getItem('restaurantemail')
    return this.http.post<any>(this._AddRestaurantServices, {email,food}) 
  }


  getFoodsData(email:any){
    return this.http.get<any>(this._foodsDetails,{params:email}) 
  }
  

  ngOnInit(): void {
      
  }

}
