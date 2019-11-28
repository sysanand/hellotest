import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponAuthenticationOrderViewComponent } from './coupon-authentication-order-view.component';

const routes: Routes = [
  {
    path:'',
    component:CouponAuthenticationOrderViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponAuthenticationOrderViewRoutingModule { }
