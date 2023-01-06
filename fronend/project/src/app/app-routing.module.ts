import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './component/admin_component/admin-home/admin-home.component';
import { AdminLoginComponent } from './component/admin_component/admin-login/admin-login.component';
import { UserDetailsComponent } from './component/admin_component/user-details/user-details.component';
import { VendorDetailsComponent } from './component/admin_component/vendor-details/vendor-details.component';
import { VendorVerifyComponent } from './component/admin_component/vendor-verify/vendor-verify.component';
import { UserHomeComponent } from './component/user_component/user-home/user-home.component';
import { UserLoginComponent } from './component/user_component/user-login/user-login.component';
import { UserSignupComponent } from './component/user_component/user-signup/user-signup.component';
import { CarAddDetailsComponent } from './component/vendor_component/car/car-add-details/car-add-details.component';
import { CarHomeComponent } from './component/vendor_component/car/car-home/car-home.component';
import { GuideAddDetailsComponent } from './component/vendor_component/guide/guide-add-details/guide-add-details.component';
import { GuideHomeComponent } from './component/vendor_component/guide/guide-home/guide-home.component';
import { HotelAddDetailsComponent } from './component/vendor_component/hotels/hotel-add-details/hotel-add-details.component';
import { HotelHomeComponent } from './component/vendor_component/hotels/hotel-home/hotel-home.component';
import { RestaurantAddDetailsComponent } from './component/vendor_component/restaurant/restaurant-add-details/restaurant-add-details.component';
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
    path: 'vendor/add_restaurant',
    component: RestaurantAddDetailsComponent
  },
  {
    path: 'vendor/restaurant_home',
    component: HotelHomeComponent
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
