import { Component, ViewChild } from '@angular/core';

import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-user-hotel',
  templateUrl: './user-hotel.component.html',
  styleUrls: ['./user-hotel.component.scss']
})
export class UserHotelComponent {


  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
    center: google.maps.LatLngLiteral = {
        lat: 24,
        lng: 12
    };
    markerPositions: google.maps.LatLngLiteral[] = [];
    zoom = 4;
    addMarker(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
    }
    openInfoWindow(marker: MapMarker) {
        if (this.infoWindow != undefined) this.infoWindow.open(marker);
    }

}
