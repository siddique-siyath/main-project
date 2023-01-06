import { Component } from '@angular/core';
import { RestaurantServicesService } from "../../../../services/vendor_services/restaurant_services/restaurant-services.service";
import { VendorServicesService } from "../../../../services/vendor_services/vendor-services.service";
import { Router } from "@angular/router";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.scss']
})
export class RestaurantHomeComponent {


  status = false
  decode:any

  constructor(private _auth: RestaurantServicesService, private Service:VendorServicesService , private route: Router) { }

  ngOnInit(): void {
    this.verify()
  }

  verify() {
    console.log('status',this.status);
    let email:any = localStorage.getItem('email')
    this.decode = jwt_decode(email)
    console.log('decode',this.decode.subject);
    this._auth.verification(this.decode).subscribe((res:any) => {
      console.log(res.verification);
      this.status = res.verification
    })
  }

  
}
