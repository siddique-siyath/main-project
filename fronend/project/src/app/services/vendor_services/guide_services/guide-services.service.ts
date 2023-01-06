import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuideServicesService {

   
  private _addGuideUrl = "http://localhost:3000/vendor/add_guide "
  private _verifyUrl = "http://localhost:3000/vendor/verify"
  data: any;

  constructor(private http:HttpClient) { }

  addGuide(user: any) {
    console.log(user);
    return this.http.post<any>(this._addGuideUrl, user) 
  }

  verification(userEmail:any){
    return this.http.get<any>(this._verifyUrl,{params:userEmail})
  }

  ngOnInit(): void {
      
  }

}
