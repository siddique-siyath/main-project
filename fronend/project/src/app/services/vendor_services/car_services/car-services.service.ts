import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarServicesService {

  private addCarUrl = "http://localhost:3000/vendor/add_car "
  private _verifyUrl = "http://localhost:3000/vendor/verify"
  data: any;

  constructor(private http:HttpClient) { }

  addCar(user: any) {
    console.log(user);
    return this.http.post<any>(this.addCarUrl, user) 
  }

  verification(userEmail:any){
    return this.http.get<any>(this._verifyUrl,{params:userEmail})
  }

  ngOnInit(): void {
      
  }

}
