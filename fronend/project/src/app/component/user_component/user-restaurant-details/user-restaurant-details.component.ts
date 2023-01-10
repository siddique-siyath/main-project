import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-user-restaurant-details',
  templateUrl: './user-restaurant-details.component.html',
  styleUrls: ['./user-restaurant-details.component.scss']
})
export class UserRestaurantDetailsComponent implements OnInit {

  items!: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit() {

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
}

const data = [
  {
    srcUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYV9NonR_MqceAOLqVkheAgGGaQAYNn2n7g&usqp=CAU',
    previewUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYV9NonR_MqceAOLqVkheAgGGaQAYNn2n7g&usqp=CAU'
  },
  {
    srcUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZwnlI5XArGVwBc3o1Sd6_osatp5vVydR_g&usqp=CAU',
    previewUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZwnlI5XArGVwBc3o1Sd6_osatp5vVydR_g&usqp=CAU'
  },
  {
    srcUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tWKyw6zBuQzMffAxLeNgZco249Qn1VkN9w&usqp=CAU',
    previewUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tWKyw6zBuQzMffAxLeNgZco249Qn1VkN9w&usqp=CAU'
  },
  {
    srcUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYV9NonR_MqceAOLqVkheAgGGaQAYNn2n7g&usqp=CAU',
    previewUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYV9NonR_MqceAOLqVkheAgGGaQAYNn2n7g&usqp=CAU'
  }
];


