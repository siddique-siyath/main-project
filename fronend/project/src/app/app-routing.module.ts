import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './component/admin_component/admin-home/admin-home.component';
import { AdminLoginComponent } from './component/admin_component/admin-login/admin-login.component';
import { UserDetailsComponent } from './component/admin_component/user-details/user-details.component';
import { VendorDetailsComponent } from './component/admin_component/vendor-details/vendor-details.component';
import { VendorVerifyComponent } from './component/admin_component/vendor-verify/vendor-verify.component';
import { UserCarComponent } from './component/user_component/user-car/user-car.component';
import { UserGuideDetailsComponent } from './component/user_component/user-guide-details/user-guide-details.component';
import { UserGuideComponent } from './component/user_component/user-guide/user-guide.component';
import { UserHomeComponent } from './component/user_component/user-home/user-home.component';
import { UserHotelDetailsComponent } from './component/user_component/user-hotel-details/user-hotel-details.component';
import { UserHotelComponent } from './component/user_component/user-hotel/user-hotel.component';
import { UserLoginComponent } from './component/user_component/user-login/user-login.component';
import { UserPlaceDetailsComponent } from './component/user_component/user-place-details/user-place-details.component';
import { UserPlaceComponent } from './component/user_component/user-place/user-place.component';
import { UserProfileComponent } from './component/user_component/user-profile/user-profile.component';
import { UserRestaurantDetailsComponent } from './component/user_component/user-restaurant-details/user-restaurant-details.component';
import { UserRestaurantComponent } from './component/user_component/user-restaurant/user-restaurant.component';
import { UserSignupComponent } from './component/user_component/user-signup/user-signup.component';
import { CarAddDetailsComponent } from './component/vendor_component/car/car-add-details/car-add-details.component';
import { CarHomeComponent } from './component/vendor_component/car/car-home/car-home.component';
import { GuideAddDetailsComponent } from './component/vendor_component/guide/guide-add-details/guide-add-details.component';
import { GuideHomeComponent } from './component/vendor_component/guide/guide-home/guide-home.component';
import { HotelAddDetailsComponent } from './component/vendor_component/hotels/hotel-add-details/hotel-add-details.component';
import { HotelAddServiceComponent } from './component/vendor_component/hotels/hotel-add-service/hotel-add-service.component';
import { HotelHomeComponent } from './component/vendor_component/hotels/hotel-home/hotel-home.component';
import { HotelRoomDetailsComponent } from './component/vendor_component/hotels/hotel-room-details/hotel-room-details.component';
import { RestaurantAddDetailsComponent } from './component/vendor_component/restaurant/restaurant-add-details/restaurant-add-details.component';
import { RestaurantHomeComponent } from './component/vendor_component/restaurant/restaurant-home/restaurant-home.component';
import { VendorFieldComponent } from './component/vendor_component/vendor-field/vendor-field.component';
import { VendorLoginComponent } from './component/vendor_component/vendor-login/vendor-login.component';
import { VendorSignupComponent } from './component/vendor_component/vendor-signup/vendor-signup.component';
import { AuthAdminGuard } from './services/admin_services/auth-admin.guard';
import { AuthGuard } from './services/user_services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user_home',
    pathMatch: 'full'
  },
  {
    path: 'user_home',
    component: UserHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user_login',
    component: UserLoginComponent
  },
  {
    path: "user_signup",
    component: UserSignupComponent
  },
  {
    path: "user_hotel",
    component: UserHotelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user_restaurant",
    component: UserRestaurantComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user_place",
    component: UserPlaceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user_car",
    component: UserCarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user_guide",
    component: UserGuideComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user_profile",
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user_hotel_details",
    component: UserHotelDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user_restaurant_details",
    component: UserRestaurantDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user_guide_details",
    component: UserGuideDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user_place_details",
    component: UserPlaceDetailsComponent,
    canActivate: [AuthGuard]
  },
  
  



  {
    path: "admin_login",
    component: AdminLoginComponent
  },
  {
    path: 'admin_home',
    component: AdminHomeComponent,
    canActivate:[AuthAdminGuard]
  },
  {
    path: 'admin/user_details',
    component: UserDetailsComponent,
    canActivate:[AuthAdminGuard]
  },
  {
    path: 'admin/vendor_details',
    component: VendorDetailsComponent,
    canActivate:[AuthAdminGuard]
  },
  {
    path: 'admin/vendor_verify',
    component: VendorVerifyComponent,
    canActivate:[AuthAdminGuard]
  },

  {
    path: "vendor_signup",
    component: VendorSignupComponent
  },
  {
    path: 'vendor_login',
    component: VendorLoginComponent
  }, 
  {
    path: 'vendor_field',
    component: VendorFieldComponent
  }, 

  {
    path: 'vendor/AddHotel',
    component: HotelAddDetailsComponent
  },
  {
    path: 'vendor/hotel_home',
    component: HotelHomeComponent
  },
  {
    path: 'vendor/hotel/service_add',
    component:HotelAddServiceComponent
  },
  {
    path: 'vendor/hotel/room_details',
    component:HotelRoomDetailsComponent
  },

  {
    path: 'vendor/add_restaurant',
    component: RestaurantAddDetailsComponent
  },
  {
    path: 'vendor/restaurant_home',
    component: RestaurantHomeComponent
  },

  {
    path: 'vendor/add_car',
    component: CarAddDetailsComponent
  },
  {
    path: 'vendor/car_home',
    component: CarHomeComponent
  },

  {
    path: 'vendor/add_guide',
    component: GuideAddDetailsComponent
  },
  {
    path: 'vendor/guide_home',
    component: GuideHomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
