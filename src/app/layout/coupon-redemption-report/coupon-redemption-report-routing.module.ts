import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponRedemptionReportComponent } from './coupon-redemption-report.component';

const routes: Routes = [
  {
    path:'',
    component:CouponRedemptionReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRedemptionReportRoutingModule { }
