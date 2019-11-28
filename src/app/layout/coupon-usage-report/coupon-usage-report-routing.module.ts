import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponUsageReportComponent } from './coupon-usage-report.component';

const routes: Routes = [
  {
    path:'',
    component:CouponUsageReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponUsageReportRoutingModule { }
