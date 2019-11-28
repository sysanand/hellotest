import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralPointsRedemptionReportComponent } from './referral-points-redemption-report.component';

const routes: Routes = [
  {
    path:'',
    component:ReferralPointsRedemptionReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralPointsRedemptionReportRoutingModule { }
