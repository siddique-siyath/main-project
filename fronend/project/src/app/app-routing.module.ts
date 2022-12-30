import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './component/admin_component/admin-home/admin-home.component';
import { AdminLoginComponent } from './component/admin_component/admin-login/admin-login.component';
import { UserDetailsComponent } from './component/admin_component/user-details/user-details.component';
import { UserHomeComponent } from './component/user_component/user-home/user-home.component';
import { UserLoginComponent } from './component/user_component/user-login/user-login.component';
import { UserSignupComponent } from './component/user_component/user-signup/user-signup.component';
import { HotelAddDetailsComponent } from './component/vendor_component/hotels/hotel-add-details/hotel-add-details.component';
import { HotelHomeComponent } from './component/vendor_component/hotels/hotel-home/hotel-home.component';
import { VendorFieldComponent } from './component/vendor_component/vendor-field/vendor-field.component';
import { VendorLoginComponent } from './component/vendor_component/vendor-login/vendor-login.component';
import { VendorSignupComponent } from './component/vendor_component/vendor-signup/vendor-signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user_home',
    pathMatch: 'full'
  },
  {
    path: 'user_home',
    component: UserHomeComponent
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
    component: AdminHomeComponent
  },
  {
    path: 'admin/user_details',
    component: UserDetailsComponent
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
