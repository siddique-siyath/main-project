import { Component, OnInit } from '@angular/core';
import { HotelServicesService } from "../../../../services/vendor_services/hotel_services/hotel-services.service";
import { Router } from "@angular/router";
import jwtDecode from 'jwt-decode';


import { animate, state, style, transition, trigger } from '@angular/animations';


// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { __values } from 'tslib';
import { elementAt } from 'rxjs';



@Component({
  selector: 'app-hotel-room-details',
  templateUrl: './hotel-room-details.component.html',
  styleUrls: ['./hotel-room-details.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class HotelRoomDetailsComponent implements OnInit {


  constructor(private hotelDataServices: HotelServicesService, private _router: Router) {

  }


  img!: any;

  images: any = []

  subImages: any = []

  title = 'hello'


  cloudName = "dnp14omap"; // replace with your own cloud name
  uploadPreset = "angular_cloud"; // replace with your own upload preset
  myWidget: any;



  hotelDetails: any = []


  dataSource: any = [];
  columnsToDisplay = ['actualPrice', 'discountPrice', 'location', 'totalRooms'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: | null | undefined;


  newCloumn = [1, 2, 3]


  ngOnInit(): void {
    this.hotelData();
  }




  async findImage(data: any, index: number) {

    // Create a Cloudinary instance and set your cloud name.
    let image = data


    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dnp14omap'
      }
    });

    // images.forEach((image: any) => {

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.

    this.img = cld.image(image);


    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    this.img.resize(fill().width(250).height(250));

    let i = this.img.resize(fill().width(250).height(250));

    this.images = i

    console.log('i = ', this.images);

    this.dataSource[index].image1 = this.images

  }


  hotelData() {
    let email: any = localStorage.getItem('hotelemail')
    let decode = jwtDecode(email)
    this.hotelDataServices.getRoomsData(decode).subscribe(async (res: any) => {
      // console.log(res.result);

      this.hotelDetails = res.result
      this.dataSource = this.hotelDetails
      // console.log('rseult = ', this.hotelDetails);
      // console.log(this.dataSource);

      // await this.findImage(this.dataSource.image1)

      console.log(this.dataSource);

      this.dataSource.forEach((element: any, index: number) => {

        console.log(index);

        this.findImage(element.image1, index)

        this.subImages = []

        this.subImages.push([])
        let size = this.subImages.length


        element.subImages.forEach((item: any) => {

          const cld = new Cloudinary({
            cloud: {
              cloudName: 'dnp14omap'
            }
          });


          this.img = cld.image(item);

          this.img.resize(fill().width(250).height(250));

          let i = this.img.resize(fill().width(250).height(250));

          this.subImages[size - 1].push(i)

        })

        element.new = this.subImages

      });


    }),
      (err: any) => {
        console.log(err);

      }
  }



  edit = async (id: any) => {
    console.log(id);
    this._router.navigate(['user_hotel_details', id])
    console.log('asdfghjk');
  }


  delete(id: any) {
    console.log(id)
    this.hotelDataServices.deleteData(id).subscribe((res) => {
      console.log('mes = ',res);
      if(res.message == 'deleted'){
      this.hotelData();
      }else{
        console.log('error');
      }
    }),
      ((err: any) => {
        console.log(err);
      })
  }

}










