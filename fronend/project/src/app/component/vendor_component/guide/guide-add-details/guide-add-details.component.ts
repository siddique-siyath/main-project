import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { GuideServicesService } from "../../../../services/vendor_services/guide_services/guide-services.service";
import { ActivatedRoute } from '@angular/router';
import { VendorServicesService } from "../../../../services/vendor_services/vendor-services.service";

@Component({
  selector: 'app-guide-add-details',
  templateUrl: './guide-add-details.component.html',
  styleUrls: ['./guide-add-details.component.scss']
})
export class GuideAddDetailsComponent {

  h: string = 'Guide'

  errorMsg: string = ''

  guideData = {
    "email": '',
    "type": '',
    "adharNumber": '',
    "location": '',
    "licenceNumber": '',
    "image1": '',
  }

  data: any
  email: any

  constructor(private _auth: GuideServicesService, private dataService: VendorServicesService, private _router: Router, private route: ActivatedRoute) {
    this.data = this.dataService.getData();
    console.log('data', this.data.message);

    this.email = this.dataService.getEmail();
    console.log('data', this.email.message);

  }

  ngOnInit(): void {
    // console.log(this.data);

    console.log(this.guideData.image1);


  }


  AddGuideDetails() {

    if (this.guideData.adharNumber != '' && this.guideData.location != '' && this.guideData.licenceNumber != '') {



      this.data = this.dataService.getData();
      console.log('data', this.data.message);
      this.guideData.type = this.data.message

      this.email = this.dataService.getEmail();
      console.log('data', this.email.message);
      this.guideData.email = this.email.message

      console.log(this.guideData);
      this._auth.addGuide(this.guideData)
        .subscribe(
          (res: any) => {
            console.log(res)
            if (res.message == 'added_guide') {
              console.log('guide home')
              this._router.navigate(['vendor/guide_home'])
            } else if (res.errMessage == 'guide_error') {
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
