import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponAuthenticationTrackComponent } from './coupon-authentication-track.component';

const routes: Routes = [
  {
    path:'',
    component:CouponAuthenticationTrackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponAuthenticationTrackRoutingModule { }
