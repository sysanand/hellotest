import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralPointsUsageReportComponent } from './referral-points-usage-report.component';

const routes: Routes = [
  {
    path:'',
    component:ReferralPointsUsageReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralPointsUsageReportRoutingModule { }
