import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumerReferralReportComponent } from './consumer-referral-report.component';

const routes: Routes = [{
  path:'',
  component:ConsumerReferralReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerReferralReportRoutingModule { }
