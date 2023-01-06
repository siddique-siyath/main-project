import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RestaurantServicesService } from "../../../../services/vendor_services/restaurant_services/restaurant-services.service";
import { ActivatedRoute } from '@angular/router';
import { VendorServicesService } from "../../../../services/vendor_services/vendor-services.service";


@Component({
  selector: 'app-restaurant-add-details',
  templateUrl: './restaurant-add-details.component.html',
  styleUrls: ['./restaurant-add-details.component.scss']
})
export class RestaurantAddDetailsComponent implements OnInit {


  h: string = 'rsetaurant'

  errorMsg: string = ''

  restaurantData = {
    "email": '',
    "type": '',
    "restaurantName": '',
    "location": '',
    "licenceNumber": '',
    "image1": '',
  }

  data: any
  email: any

  constructor(private _auth: RestaurantServicesService, private dataService: VendorServicesService, private _router: Router, private route: ActivatedRoute) {
    this.data = this.dataService.getData();
    console.log('data', this.data.message);

    this.email = this.dataService.getEmail();
    console.log('data', this.email.message);

  }

  ngOnInit(): void {
    // console.log(this.data);

    console.log(this.restaurantData.image1);


  }


  addRestaurantDetails() {

    if (this.restaurantData.restaurantName != '' && this.restaurantData.location != '' && this.restaurantData.licenceNumber != '') {



      this.data = this.dataService.getData();
      console.log('data', this.data.message);
      this.restaurantData.type = this.data.message

      this.email = this.dataService.getEmail();
      console.log('data', this.email.message);
      this.restaurantData.email = this.email.message

      console.log(this.restaurantData);
      this._auth.addRestaurant(this.restaurantData)
        .subscribe(
          (res: any) => {
            console.log(res)
            if (res.message == 'added_restaurant') {
              this._router.navigate(['/vendor/restaurant_home'])
            } else if (res.errMessage == 'restaurant_error') {
              this.errorMsg = "error"
            }
          },
          (err: any) => {
            console.log('error');
            console.log(err)
          }
        )
      console.log('hgjgjhg');


    } else {
      this.errorMsg = 'fill the details'
    }


  }


}
