import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Router } from "@angular/router";


import { HotelServicesService } from "../../../../services/vendor_services/hotel_services/hotel-services.service";

@Component({
  selector: 'app-hotel-add-service',
  templateUrl: './hotel-add-service.component.html',
  styleUrls: ['./hotel-add-service.component.scss']
})
export class HotelAddServiceComponent implements OnInit {

  featureBoxs = [{ value: '' }];
  typeBoxs = [{ value: '' }]


  uploadFinish: boolean = false
  message: string = ''
  uploadMessage: string = ''
  uploadMessageErr: string = ''

  hotelData = {
    "name": '',
    "totalRooms": '',
    "description": '',
    "actualPrice": '',
    "discountPrice": '',
    "addRoomsFeature": [{}],
    "addRoomsTypes": [{}],
    "image1": '',
    "subImages": [{}],
    "location":''
  }

  files: File[] = [];


  constructor(private _Service: HotelServicesService , private _router: Router) { }

  ngOnInit(): void {

  }


  Feature() {
    console.log('f1 = ', this.featureBoxs);

    this.hotelData.addRoomsFeature = this.featureBoxs

    console.log('final1 = ', this.hotelData.addRoomsFeature);

    this.featureBoxs.push({ value: '' });

  }


  removeFeature() {
    console.log('f1 = ', this.featureBoxs);

    console.log('k1 = ', this.hotelData.addRoomsFeature);

    this.featureBoxs.pop();
  }


  Type() {

    console.log('f2 = ', this.typeBoxs);

    this.hotelData.addRoomsTypes = this.typeBoxs

    console.log('final2 = ', this.hotelData.addRoomsTypes);

    this.typeBoxs.push({ value: '' });

  }


  removeType() {

    console.log('f2 = ', this.typeBoxs);

    console.log('k2 = ', this.hotelData.addRoomsFeature);


    this.typeBoxs.pop();
  }


  async onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);

  }


  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }



  async onupload() {

    console.log('file = ', this.files);


    if (!this.files[0] || this.files.length <= 4 || this.files.length > 5) {
      alert('image inserted')
      this.uploadMessageErr = 'Please upload image'
      return;
    }

    const result = await this.files.forEach(async (file, index) => {
      const file_data = file
      const data = new FormData();
      data.append('file', file_data)
      data.append('upload_preset', 'angular_cloud')
      data.append('cloud_name', 'dnp14omap')


      await this._Service.imageInsert(data).subscribe(async (Response: any) => {
        if (Response) {

          console.log(index);
          console.log(Response);

          console.log('id', Response.public_id);

          if (index == 0) {
            this.hotelData.image1 = Response.public_id
          } else {
            this.hotelData.subImages.push(Response.public_id)
          }

          if (this.hotelData.subImages.length == 3) {
            this.uploadFinish = true
            this.uploadMessageErr = ''
            this.uploadMessage = 'image  uploaded'
          }

        }

      })

    })


  }



  async addData() {

    if (this.uploadFinish == false) {
      this.message = 'Please upload the image'
      return;
    }

    this.Feature();
    this.Type();
    this.hotelData.addRoomsFeature.pop()
    this.hotelData.addRoomsTypes.pop()
    this.hotelData.subImages.shift()
    console.log("hotel = ", this.hotelData);

    this._Service.addHotelServices(this.hotelData).subscribe(async (res: any) => {
      console.log('response = ', res);
      if(res.message == 'Data_Added'){
        this._router.navigate(['/vendor/hotel_home'])
      }else{
        console.log('error');
      }
    }),
      (err: any) => {
        console.log(err);
      }


  }




}
