import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponOrderViewComponent } from './coupon-order-view.component';

const routes: Routes = [
  {
    path:'',
    component:CouponOrderViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponOrderViewRoutingModule { }
