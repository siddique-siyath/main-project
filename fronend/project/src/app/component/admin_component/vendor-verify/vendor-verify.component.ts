import { Component } from '@angular/core';
import { AdminServicesServicesService } from "../../../services/admin_services/admin-services.services.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-vendor-verify',
  templateUrl: './vendor-verify.component.html',
  styleUrls: ['./vendor-verify.component.scss']
})
export class VendorVerifyComponent {

  vendorData: any = {
    "name": '',
    "email": '',
    "phone": '',
    "field": '',
    "hotelName": '',
    "licenseNumber": '',
    "location": '',
    "adharNumber": '',
    "restaurantName" : '',
    "carNumber" : '',
    "verification" : '',
  }

  data = ''
  option = false
  Active1:boolean = false
  Active2:boolean = false


  constructor(private vendorDataServices: AdminServicesServicesService, private _router: Router) { }


  ngOnInit(): void {
    this.getData();
    if(this.Active2 == false){
    this.pending();
    }else {
    this.verified();
    }
  }

  getData() {
    this.vendorDataServices.getVendorData().subscribe((vendorData: any) => {
      console.log(vendorData.length);
      this.vendorData = vendorData
      console.log('new',this.vendorData);
    })
  }



  pending(){
    this.Active1 = true;
    this.Active2 = false;
    this.option = false;
  }

  verified(){
    this.Active2 = true;
    this.Active1 = false;
    this.option = true;
  }


  verify(id:any){
    this.vendorDataServices.verifyVendor({ queryParams: { id } }).subscribe(async (res: any) => {
      console.log(res);
      const Data = await this.getData()
      // this._router.navigate(['/admin/vendor_verify'])
      console.log('asdfghjk');
    }),
      (err: any) => {
        console.log(err);
      }
  }

}
