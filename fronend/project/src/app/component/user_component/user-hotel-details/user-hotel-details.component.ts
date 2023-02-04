import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

import { Router, ActivatedRoute } from "@angular/router";
import { UserServiceService } from "../../../services/user_services/user-service.service";
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

@Component({
  selector: 'app-user-hotel-details',
  templateUrl: './user-hotel-details.component.html',
  styleUrls: ['./user-hotel-details.component.scss']
})
export class UserHotelDetailsComponent {


  data: { srcUrl: string; previewUrl: string; }[] = [

  ];


  img: any
  images: any

  items!: GalleryItem[];

  hotelData: any
  hotelDetail: any

  imageData = this.data;

  constructor(public gallery: Gallery, public lightbox: Lightbox, private route: Router, private _activeRoute: ActivatedRoute, private service: UserServiceService) {
  }

  ngOnInit() {

    this.gallary();

    this.getDetails();

  }

  gallary() {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }



  async getDetails() {

    let id = await this._activeRoute.snapshot.params['id'];
    let email = await localStorage.getItem('hotelId')

    console.log(id);
    console.log(email);

    this.service.hotel_details(id, email).subscribe(async (res) => {
      console.log(res.data);

      this.hotelDetail = res.result.hotelDetails[0]

      let imageName = await res.result.hotelDetails[0].image1
      let cloudName = 'dnp14omap'
      const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${imageName}`;

      this.data.push({ srcUrl: imageUrl, previewUrl: imageUrl })

      const final = await res.result.hotelDetails[0].subImages.forEach(async (element: any) => {
        let imageName = await element
        let cloudName = 'dnp14omap'
        const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${imageName}`;
        // console.log(imageUrl);
        this.data.push({ srcUrl: imageUrl, previewUrl: imageUrl })
        // console.log(this.data);
        this.gallary();
      });

      if (final) {
        console.log(this.data);
      } else {
        console.log('error');
      }


      this.hotelData = res.data
      console.log(this.data)

      this.hotelData.forEach(async (element: any, index: number) => {
        console.log(element);
        element.hotelDetails.forEach(async (item: any) => {
          console.log(item);

          const data = await this.findImage(item.image1)
          item.new = data
          console.log('data = ', this.hotelData);
        });
      })

      // if (near) {
      //   console.log(this.data);
      // } else {
      //   console.log('error');
      // }


    }),
      ((err: Error) => {
        console.log(err);
      })


  }






  async findImage(data: any) {

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

    return this.images

    // this.dataSource[index].image1 = this.images

  }





  
  isFormVisible = true;

  openForm() {
    this.isFormVisible = true;
    console.log(this.isFormVisible);
  }

  closeForm() {
    this.isFormVisible = false;
  }




 async order(id: any) {
    console.log(id);
    (await this.service.orderRoom(id)).subscribe((res:any) => {
    }),
      ((err: Error) => {
        console.log(err);
      })
  }


}

