import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponOrderListComponent } from './coupon-order-list.component';

const routes: Routes = [
  {
    path:'',
    component:CouponOrderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponOrderListRoutingModule { }
