import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { CarServicesService } from "../../../../services/vendor_services/car_services/car-services.service";
import { ActivatedRoute } from '@angular/router';
import { VendorServicesService } from "../../../../services/vendor_services/vendor-services.service";


@Component({
  selector: 'app-car-add-details',
  templateUrl: './car-add-details.component.html',
  styleUrls: ['./car-add-details.component.scss']
})
export class CarAddDetailsComponent {

  
  h: string = 'Car'

  errorMsg: string = ''

  carData = {
    "email": '',
    "type": '',
    "carNumber": '',
    "location": '',
    "licenceNumber": '',
    "image1": '',
  }

  data: any
  email: any

  constructor(private _auth: CarServicesService, private dataService: VendorServicesService, private _router: Router, private route: ActivatedRoute) {
    this.data = this.dataService.getData();
    console.log('data', this.data.message);

    this.email = this.dataService.getEmail();
    console.log('data', this.email.message);

  }

  ngOnInit(): void {
    // console.log(this.data);

    console.log(this.carData.image1);


  }


  addCarDetails() {

    if (this.carData.carNumber != '' && this.carData.location != '' && this.carData.licenceNumber != '') {



      this.data = this.dataService.getData();
      console.log('data', this.data.message);
      this.carData.type = this.data.message

      this.email = this.dataService.getEmail();
      console.log('data', this.email.message);
      this.carData.email = this.email.message

      console.log(this.carData);
      this._auth.addCar(this.carData)
        .subscribe(
          (res: any) => {
            console.log(res)
            if (res.message == 'added_car') {
              this._router.navigate(['/vendor/car_home'])
            } else if (res.errMessage == 'car_error') {
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
